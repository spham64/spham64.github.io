import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

export default function Menu() {
  const [hoveredPage, setHoveredPage] = useState(null);
  const [activePage, setActivePage] = useState("main");
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Update active page based on hash URL
  useEffect(() => {
    const updateActivePage = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "/" || hash === "/main" || hash === "") {
        setActivePage("main");
      } else if (hash.includes("/about")) {
        setActivePage("about");
      } else if (hash.includes("/projects")) {
        setActivePage("projects");
      }
    };

    updateActivePage();
    window.addEventListener("hashchange", updateActivePage);

    return () => window.removeEventListener("hashchange", updateActivePage);
  }, []);

  const handleNavigation = (page) => {
    if (page === "main") {
      window.location.hash = "/";
    } else {
      window.location.hash = `/${page}`;
    }
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const renderMenuContent = () => (
    <>
      <Box>
        <Box
          onClick={() => handleNavigation("main")}
          onMouseEnter={() => setHoveredPage("main")}
          onMouseLeave={() => setHoveredPage(null)}
          sx={{
            px: 2,
            py: 1.5,
            cursor: "pointer",
            bgcolor: "transparent",
            transition: "background-color 0.2s, border-left-color 0.2s",
            borderLeft: "3px solid transparent",
            ...((hoveredPage === "main" ||
              (activePage === "main" && hoveredPage === null)) && {
              bgcolor: "rgba(255, 255, 255, 0.07)",
              borderLeftColor: "rgba(255, 255, 255, 0.2)",
            }),
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 500,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Main Menu
          </Typography>
        </Box>
        <Box
          onClick={() => handleNavigation("about")}
          onMouseEnter={() => setHoveredPage("about")}
          onMouseLeave={() => setHoveredPage(null)}
          sx={{
            px: 2,
            py: 1.5,
            cursor: "pointer",
            bgcolor: "transparent",
            transition: "background-color 0.2s, border-left-color 0.2s",
            borderLeft: "3px solid transparent",
            ...((hoveredPage === "about" ||
              (activePage === "about" && hoveredPage === null)) && {
              bgcolor: "rgba(255, 255, 255, 0.07)",
              borderLeftColor: "rgba(255, 255, 255, 0.2)",
            }),
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 500,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            About
          </Typography>
        </Box>
        <Box
          onClick={() => handleNavigation("projects")}
          onMouseEnter={() => setHoveredPage("projects")}
          onMouseLeave={() => setHoveredPage(null)}
          sx={{
            px: 2,
            py: 1.5,
            cursor: "pointer",
            bgcolor: "transparent",
            transition: "background-color 0.2s, border-left-color 0.2s",
            borderLeft: "3px solid transparent",
            ...((hoveredPage === "projects" ||
              (activePage === "projects" && hoveredPage === null)) && {
              bgcolor: "rgba(255, 255, 255, 0.07)",
              borderLeftColor: "rgba(255, 255, 255, 0.2)",
            }),
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 500,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Projects
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 2.3,
          pb: 1.5,
          pt: 0.5,
        }}
      >
        <Link to="https://github.com/spham64/" target="_blank">
          <GitHubIcon
            fontSize="medium"
            sx={{
              color: "white",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "rgba(255, 255, 255, 0.56)",
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
                color: "rgba(255, 255, 255, 0.56)",
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
                color: "rgba(255, 255, 255, 0.56)",
                cursor: "pointer",
              },
            }}
          />
        </Link>
      </Box>
    </>
  );

  if (isMobile) {
    // Mobile: collapsible menu
    return (
      <>
        <Box
          sx={{
            position: "fixed",
            bottom: 24,
            left: 16,
            zIndex: 1300,
          }}
        >
          <IconButton
            onClick={() => setIsOpen((prev) => !prev)}
            sx={{
              bgcolor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.8)",
              },
            }}
          >
            {isOpen ? (
              <CloseIcon sx={{ color: "white" }} />
            ) : (
              <MenuIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </Box>

        {isOpen && (
          <Box
            sx={{
              position: "fixed",
              bottom: 72,
              left: 16,
              right: 16,
              display: "flex",
              flexDirection: "column",
              backdropFilter: "blur(10px)",
              borderRadius: 1,
              overflow: "hidden",
              bgcolor: "rgba(0,0,0,0.6)",
              zIndex: 1299,
            }}
          >
            {renderMenuContent()}
          </Box>
        )}
      </>
    );
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 100,
        left: {
          lg: 50,
          xl: 100,
        },
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(10px)",
        borderRadius: 0.5,
        overflow: "hidden",
        bgcolor: "rgba(0,0,0,0.4)",
        minWidth: {
          lg: 275,
          xl: 325,
        },
      }}
    >
      {renderMenuContent()}
    </Box>
  );
}
