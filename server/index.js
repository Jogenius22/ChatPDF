const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const admin = require("firebase-admin");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const openai = require("openai");
openai.apiKey = process.env.OPENAI_API_KEY;

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

// User Authentication
app.post("/api/auth", async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const customToken = await admin.auth().createCustomToken(decodedToken.uid);
    res.status(200).json({ customToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PDF Upload
app.post("/api/upload", upload.single("pdf"), async (req, res) => {
  const { buffer } = req.file;
  const filename = `${uuidv4()}.pdf`;

  try {
    const bucket = admin.storage().bucket();
    const file = bucket.file(filename);
    const stream = file.createWriteStream({
      metadata: {
        contentType: "application/pdf",
      },
    });

    stream.on("error", (error) => {
      res.status(400).json({ error: error.message });
    });

    stream.on("finish", async () => {
      await file.makePublic();
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;
      res.status(200).json({ url: publicUrl });
    });

    stream.end(buffer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Chat Interaction
app.post("/api/chat", async (req, res) => {
  const { message, modelId } = req.body;

  try {
    const prompt = `You have uploaded a PDF file with the following content:\n\n${message}\n\nPlease provide a summary of the main points.`;

    const responseFromAI = await openai.Completion.create({
      engine: modelId || "text-davinci-002",
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    res.status(200).json({ response: responseFromAI.choices[0].text.trim() });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
