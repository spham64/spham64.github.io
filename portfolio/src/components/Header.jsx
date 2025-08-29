import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "#363635",
        minHeight: "60px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        // filter: "blur(1px)",
        backgroundColor: "#242423",
      }}
    >
      <Box
        sx={{
          // border: 1,
          mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Link to="/" style={{ marginRight: 20, color: "#E16036" }}>
          <Typography>Home</Typography>
        </Link>
        <Link to="/projects" style={{ marginRight: 20, color: "#E16036" }}>
          <Typography>Projects</Typography>
        </Link>
        <Link
          to="https://webpages.charlotte.edu/spham2/itis3135/"
          style={{ marginRight: 20, color: "#E16036" }}
          target="_blank"
        >
          <Typography>ITIS3135</Typography>
        </Link>
        <Link></Link>
      </Box>
    </Box>
  );
}
