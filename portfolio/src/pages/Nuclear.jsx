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
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <iframe
            src="/jupyter/nuclear.html"
            title="Nuclear Energy Notebook"
            style={{
              width: "100%",
              height: "80vh",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
