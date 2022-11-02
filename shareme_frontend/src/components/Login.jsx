import React from "react";
import { useNavigate } from "react-router-dom";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { client } from "../client";

const Login = () => {
  const navigate = useNavigate();

  let handleCredentialResponse = (response) => {
    let jwt = jwt_decode(response.credential);

    localStorage.setItem("user", JSON.stringify(jwt));

    const { name, sub, picture } = jwt;

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div div className="flex justify-start items-center flex-col h-screen ">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center inset-0 bg-blackOverlay">
          <div className="p-5 flex flex-col items-center">
            <img src={logo} width="130px" alt="logo" className=" text-center" />
            <div className=" mt-4">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleCredentialResponse(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
