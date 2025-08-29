import Box from "@mui/material/Box";
import Header from "../components/Header.jsx";
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer.jsx";

export default function Projects() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          border: 1,
          boxSizing: "border-box",
          backgroundColor: "#242423",
        }}
      >
        <Header />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: 1,
            mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
            mt: { xs: 5, sm: 15 },
            maxWidth: "100%",
            mb: 5,
          }}
        >
          <Typography>WIP</Typography>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
