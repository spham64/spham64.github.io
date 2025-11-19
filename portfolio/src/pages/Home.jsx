import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "../components/Menu";
import Globe from "../components/Globe";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Sam Pham";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Globe />
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          backdropFilter: "blur(1px)",
          borderRadius: 2,
          // border: 1,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "4rem",
            fontWeight: 500,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "Inconsolata",
          }}
        >
          {displayedText}
          <Box
            component="span"
            sx={{
              //   border: 1,
              animation: "blink 1s infinite",
              "@keyframes blink": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0 },
              },
            }}
          >
            _
          </Box>
        </Typography>
      </Box>
      <Menu />
    </>
  );
}
