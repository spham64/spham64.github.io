import Box from "@mui/material/Box";
import BackButton from "../components/BackButton";

export default function Nuclear() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          boxSizing: "border-box",
          width: "100vw",
        }}
      >
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
        <BackButton />
      </Box>
    </>
  );
}
