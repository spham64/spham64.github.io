import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          borderTop: 1,
          borderColor: "#363635",
          minHeight: "60px",
          mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="https://github.com/spham64/" target="_blank">
          <GitHubIcon
            fontSize="medium"
            sx={{
              color: "white",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#E16036",
                cursor: "pointer",
              },
            }}
          />
        </Link>

        <Link to="https://www.linkedin.com/in/spham2/" target="_blank">
          <LinkedInIcon
            fontSize="medium"
            sx={{
              color: "white",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#E16036",
                cursor: "pointer",
              },
              p: 1,
            }}
          />
        </Link>

        <Link to="mailto:samuelpham64@gmail.com">
          <EmailIcon
            fontSize="medium"
            sx={{
              color: "white",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#E16036",
                cursor: "pointer",
              },
            }}
          />
        </Link>
      </Box>
    </>
  );
}
