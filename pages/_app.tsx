// chatpdf/pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
