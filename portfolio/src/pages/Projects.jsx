import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          boxSizing: "border-box",
          width: "99vw",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.6s ease-in",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
            mt: { xs: 2, sm: 5 },
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              //   border: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" sx={{ mb: 4 }}>
              Projects{" "}
            </Typography>
            <Box sx={{ mb: 3, ml: 2 }}>
              <Typography variant="h2">
                <MenuBookRoundedIcon fontSize="extralarge" />
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
            mt: 2,
            maxWidth: "100%",
            mb: 3,
            gap: 2,
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <a
            href="https://github.com/Group10-3155/group_10_3155"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Card
              sx={{
                width: 370,
                height: 275,
                backgroundColor: "#131212ff",
                borderRadius: 4,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
                overflow: "hidden",
              }}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <Box sx={{ overflow: "hidden", height: 140 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/wyaniners_logo.png"
                    alt="wyaniners logo"
                    sx={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </Box>
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
            </Card>
          </a>

          <a
            href="https://github.com/ryanhilliard23/ADaVS"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Card
              sx={{
                width: 370,
                height: 275,
                backgroundColor: "#131212ff",
                borderRadius: 4,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
                overflow: "hidden",
              }}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <Box sx={{ overflow: "hidden", height: 140 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/adavs_logo.png"
                    alt="adavs logo"
                    sx={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </Box>
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
            </Card>
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
            maxWidth: "100%",
            mb: 3,
            gap: 2,
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <Box sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Link to="/projects/nuclear">
              <Card
                sx={{
                  width: 370,
                  height: 275,
                  backgroundColor: "#131212ff",
                  borderRadius: 4,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                  overflow: "hidden",
                }}
              >
                <CardActionArea sx={{ height: "100%" }}>
                  <Box sx={{ overflow: "hidden", height: 140 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="images/nuclear.png"
                      alt="nuclear energy visualization"
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ color: "white" }}
                    >
                      Nuclear Energy in the U.S.
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      A jupyter notebook that compares nuclear energy with other
                      energy sources in the United States
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Box>
          <Box sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Link to="/projects/classification">
              <Card
                sx={{
                  width: 370,
                  height: 275,
                  backgroundColor: "#131212ff",
                  borderRadius: 4,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                  overflow: "hidden",
                }}
              >
                <CardActionArea sx={{ height: "100%" }}>
                  <Box sx={{ overflow: "hidden", height: 140 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="images/income_group.png"
                      alt="income classification visualization"
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ color: "white" }}
                    >
                      Global Income Classification
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      A jupyter notebook that predicts country income groups
                      using non-GDP development indicators with a
                      high-performing Random Forest model
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
            maxWidth: "100%",
            mb: 3,
            gap: 2,
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <Box sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Link to="/projects/gold">
              <Card
                sx={{
                  width: 370,
                  height: 275,
                  backgroundColor: "#131212ff",
                  borderRadius: 4,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                  overflow: "hidden",
                }}
              >
                <CardActionArea sx={{ height: "100%" }}>
                  <Box sx={{ overflow: "hidden", height: 140 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="images/gold.png"
                      alt="gold regression visualization"
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ color: "white" }}
                    >
                      Gold Regression
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      A jupyter notebook that uses regression models to predict
                      gold prices based on various financial factors
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Box>
          <Box sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Link to="/projects/clustering">
              <Card
                sx={{
                  width: 370,
                  height: 275,
                  backgroundColor: "#131212ff",
                  borderRadius: 4,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                  overflow: "hidden",
                }}
              >
                <CardActionArea sx={{ height: "100%" }}>
                  <Box sx={{ overflow: "hidden", height: 140 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="images/esg.png"
                      alt="ESG clusters visualization"
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ color: "white" }}
                    >
                      ESG Clustering
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      A Jupyter Notebook that applies K-Means clustering to
                      group S&P 500 companies based on their ESG performance
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Box>
        </Box>
      </Box>
      <Menu />
    </>
  );
}
