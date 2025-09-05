import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Nuclear() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          // border: 1,
          boxSizing: "border-box",
          backgroundColor: "#242423",
          width: "100vw",
        }}
      >
        <Header />
        <Footer />
      </Box>
    </>
  );
}
