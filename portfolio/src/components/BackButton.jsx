import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(-1)}
      sx={{
        position: "fixed",
        bottom: 25,
        left: 15,
        backdropFilter: "blur(10px)",
        borderRadius: 0.5,
        overflow: "hidden",
        minWidth: 325,
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          px: 2,
          py: 1.5,
          cursor: "pointer",
          transition: "background-color 0.2s, border-left-color 0.2s",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.07)",
            borderLeftColor: "rgba(255, 255, 255, 0.2)",
          },
          borderLeft: "3px solid transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ChevronLeftIcon
            sx={{
              color: "white",
              fontSize: "1.4rem",
            }}
          />

          <Typography
            sx={{
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 500,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Back
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
