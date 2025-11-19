import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";

export default function About() {
  const [age, setAge] = useState("0");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);

    const interval = setInterval(() => {
      const time =
        (new Date() - new Date("2005-01-26T00:00:00")) /
        (1000 * 60 * 60 * 24 * 365.25);
      setAge(time.toString().substring(0, 12));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
          mt: { xs: 3, sm: 7 },
          maxWidth: "100%",
          mb: 5,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out",
        }}
      >
        <Avatar
          alt="Sam Pham"
          src="/images/myself_reduced.jpg"
          sx={{
            height: 150,
            width: 150,
            mb: 2,
          }}
        />
        <Typography variant="h3">Hi, I am Sam Pham</Typography>
        <Typography variant="h6" sx={{ mb: 2, fontSize: "1.3rem" }}>
          Student & Researcher at UNC Charlotte
        </Typography>
        <Typography variant="body1" sx={{ my: 1, fontSize: "1.1rem" }}>
          I'm a <span id="age">{age}</span> year-old student at UNCC from
          Charlotte, NC, with a passion for solving challenging problems using
          cutting-edge technologies and tools. This passion has led me into the
          software development field, where I have researched and worked on ways
          to support literacy and education for all.
        </Typography>
        <Typography variant="body1" sx={{ my: 1, fontSize: "1.1rem" }}>
          When I'm not coding or studying, I enjoy activites that keep my
          physically and mentally active. Whether it's going to the gym,
          reading, or staying up-to-date with the latest trends in technology
          and economics, I'm always looking for ways to stay engaged and
          continue learning.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
          Check out my{" "}
          <Box
            component="a"
            href="https://github.com/spham64/"
            target="_blank"
            sx={{
              color: "#3784ccff",
              textDecoration: "none",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#7ab0e4ff",
              },
            }}
          >
            GitHub
          </Box>{" "}
          and{" "}
          <Box
            component="a"
            href="https://drive.google.com/file/d/18ui1_42pOzMsrTZfjkb5FBEcrnYd43qw/view?usp=sharing"
            target="_blank"
            sx={{
              color: "#3784ccff",
              textDecoration: "none",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#7ab0e4ff",
              },
            }}
          >
            resume
          </Box>
          .
        </Typography>
      </Box>
      <Menu />
    </>
  );
}
