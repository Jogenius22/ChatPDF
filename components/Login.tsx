import React from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleLoginSuccess = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('getAuthResponse' in response) {
      try {
        const idToken = response.getAuthResponse().id_token;
        const res = await fetch("/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idToken }),
        });
        const data = await res.json();
        sessionStorage.setItem("customToken", data.customToken);
        router.push("/");
      } catch (error) {
        console.error("Authentication Failed:", error);
      }
    }
  };

  const handleLoginFailure = (error: any) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <GoogleLogin
        clientId="111479472545842687566"
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
      />
    </div>
  );
};

export default Login;