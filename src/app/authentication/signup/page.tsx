import { Box, autocompleteClasses } from "@mui/material";

export default function Page() {
  const imageUrl = "/authentication/signup.svg";

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${imageUrl})`,
          height: "80%",
          width: "80%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {/* Your content here */}
      </Box>
    </Box>
  );
}
