"use client";
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import AuthInput from "@/components/authentication/AuthInput";
import AuthButton from "@/components/authentication/AuthButton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import ButtonAppBar from "@/components/General/EmployeeNavbar";

const imageUrl = "/authentication/login.svg";
export default function Page() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // TODO: Add validation for email, password, and confirmPassword

    const response = await fetch(
      "http://127.0.0.1:8000/users/api/login-user/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: password }),
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      // Save the token in Local Storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data?.userid);
      localStorage.setItem("userType", "employee");
      console.log("You are loged in successfully.", data);
      setError("");

      router.replace("/employee/recommendedjobs");
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
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems="center"
          direction="column"
          spacing={2}
          sx={{
            backgroundImage: `url(${imageUrl})`,
            height: "800px",
            width: "800px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid
              container
              justifyContent={"center"}
              alignItems="center"
              direction="column"
              spacing={2}
              sx={{ paddingTop: "30%" }}
            >
              <Grid item>
                <AuthInput
                  ref={emailRef}
                  placeholder="   email"
                  type="email"
                ></AuthInput>
              </Grid>
              <Grid item>
                <AuthInput
                  ref={passwordRef}
                  placeholder="   Password"
                  type="password"
                ></AuthInput>
              </Grid>
              <Grid item>
                <Link
                  href={"/"}
                  style={{ fontSize: "1rem", lineHeight: "2px" }}
                >
                  Forgot Password
                </Link>
              </Grid>
              <Grid item>
                <AuthButton disabled={loading} name={"Log in"} />{" "}
              </Grid>
              <Grid item>
                <Link href="/authentication/employee/signup">
                  <Typography variant="body1" lineHeight={1}>
                    sign up
                  </Typography>
                </Link>
              </Grid>
            </Grid>{" "}
          </form>{" "}
          <Typography sx={{ color: "red" }} variant="body2">
            {error}
          </Typography>
        </Grid>
      </Box>
    </>
  );
}
