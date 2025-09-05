import Box from "@mui/material/Box";
import Header from "../components/Header.jsx";
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

export default function Projects() {
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // border: 1,
            mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
            mt: { xs: 2, sm: 5 },
            maxWidth: "100%",
          }}
        >
          <Typography variant="h2" sx={{ mb: 4 }}>
            Projects <TipsAndUpdatesIcon fontSize="extralarge" />
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // border: 1,
            mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
            mt: 2,
            maxWidth: "100%",
            mb: 3,
            gap: 2,
          }}
        >
          <Card
            sx={{
              width: 350,
              backgroundColor: "#353533ff",
              borderRadius: 4,
            }}
          >
            <a
              href="https://github.com/Group10-3155/group_10_3155"
              target="_blank"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/wyaniners_logo.png"
                  alt="wyaniners logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                    WYANiners
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    An interactive campus map that shows where events are
                    happening and shows hotspots of popular activities around
                    campus
                  </Typography>
                </CardContent>
              </CardActionArea>
            </a>
          </Card>

          <Card
            sx={{
              width: 350,
              backgroundColor: "#353533ff",
              borderRadius: 4,
            }}
          >
            <a href="https://github.com/ryanhilliard23/ADaVS" target="_blank">
              <CardActionArea sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/adavs_logo.png"
                  alt="adavs logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                    ADaVS
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Asset discovery and an open source vulnerability scanner to
                    display enterprise vulnerabilities
                  </Typography>
                </CardContent>
              </CardActionArea>
            </a>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // border: 1,
            mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
            maxWidth: "100%",
            mb: 5,
            gap: 2,
          }}
        >
          <Link to="/projects/nuclear">
            <Card
              sx={{
                width: 350,
                backgroundColor: "#353533ff",
                borderRadius: 4,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image=""
                  alt="image of nuclear energy data visualization"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                    Nuclear Energy in the U.S.
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    A jupyter notebook that compares nuclear energy with other
                    energy sources in the United States.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
