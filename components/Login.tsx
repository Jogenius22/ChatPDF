import React from "react";
import { GoogleLogin } from "react-google-login";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleLoginSuccess = (response) => {
    // TODO: Authenticate with the backend
    // Redirect to the main page
    router.push("/");
  };

  const handleLoginFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
      />
    </div>
  );
};

export default Login;
