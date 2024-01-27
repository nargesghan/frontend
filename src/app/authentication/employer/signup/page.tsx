"use client";
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ButtonAppBar from "@/components/General/EmployerNavbar";
import { styled } from "@mui/system";

const imageUrl = "/authentication/login.svg";

const Input = styled("input")({
  width: "507px",
  height: "50px",
  padding: "20px",
  borderRadius: "5px",
  backgroundColor: "#F9F9F9",
  border: "solid",
  borderWidth: "1px",
  borderColor: "#E6E6E6",
});

const Label = styled("label")({
  height: "24px",
  fontSize: "14px",
  color: "#252B42",
  fontWeight: 500,
  display: "block",
});

export default function Page() {
  const imageUrl = "/authentication/signup.svg";
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    // TODO: Add validation for email, password, and confirmPassword

    const response = await fetch(
      "http://127.0.0.1:8000/users/api/register-recruiter/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password1: password,
          password2: confirmPassword,
        }),
      }
    );

    const data = await response.json();

    if (response.status === 201) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("userType", "employer");
      console.log("Your account has been created successfully.", data);
      setError("");
      router.replace("/employer/dashboard/jobs");
    } else {
      // TODO: Handle errors from the API

      setError(data.message);
    }

    setLoading(false);
  };

  return (
    <>
      <ButtonAppBar />
      <Box
        sx={{
          backgroundImage: `url(/General/employerAuthbackground.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "0.5",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              border: "solid",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderColor: "#0EC5D7",
              padding: "15px",
              backgroundColor: "info.contrastText",
            }}
          >
            <Label htmlFor={"email"}>Email address</Label>
            <Input
              ref={emailRef}
              placeholder="email"
              id="email"
              type="email"
              required
            ></Input>
            <Label htmlFor={"password"}>password</Label>
            <Input
              ref={passwordRef}
              placeholder="password"
              id="password"
              type="password"
              required
            ></Input>
            <Label htmlFor={"confpassword"}> confirm password</Label>
            <Input
              ref={confirmPasswordRef}
              placeholder="   Confirm Password"
              type="password"
              id="confpassword"
            ></Input>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <input
                disabled={loading}
                type="submit"
                value={"sign up"}
                style={{
                  width: "123px",
                  height: "58px",
                  backgroundColor: "#0EC5D7",
                  border: "none",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  margin: "15px",
                }}
              ></input>
            </Box>
            <Typography sx={{ color: "red" }} variant="body2">
              {error}
            </Typography>
          </Box>
        </form>
      </Box>
    </>
  );
}
