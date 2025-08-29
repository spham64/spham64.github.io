import Box from "@mui/material/Box";
import Header from "../components/Header.jsx";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [age, setAge] = useState("0");

  useEffect(() => {
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
          minHeight: "100vh",
          // border: 1,
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
            // border: 1,
            mx: { xs: 2, sm: 10, md: 20, lg: 50, xl: 75 },
            mt: { xs: 5, sm: 15 },
            maxWidth: "100%",
            mb: 5,
          }}
        >
          <Avatar
            alt="Sam Pham"
            src="/images/myself_reduced.jpg"
            sx={{ height: 150, width: 150, mb: 2 }}
          />
          <Typography variant="h3">Hi, I am Sam Pham</Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Student & Researcher at UNC Charlotte
          </Typography>
          <Typography variant="body1" sx={{ my: 1 }}>
            I'm a <span id="age">{age}</span> year-old student at UNCC from
            Charlotte, NC, with a passion for solving challenging problems using
            cutting-edge technologies and tools. This passion has led me into
            the software development field, where I have researched and worked
            on ways to support literacy and education for all.
          </Typography>
          <Typography variant="body1" sx={{ my: 1 }}>
            When I'm not coding or studying, I enjoy activites that keep my
            physically and mentally active. Whether it's going to the gym,
            reading, or staying up-to-date with the latest trends in technology
            and economics, I’m always looking for ways to stay engaged and
            continue learning.
          </Typography>
          <Typography>
            Check out my{" "}
            <Link
              to="https://github.com/spham64/"
              target="_blank"
              style={{ color: "#E16036" }}
            >
              GitHub
            </Link>{" "}
            and{" "}
            <Link
              to="https://drive.google.com/file/d/1QjLq6dqdqMIGsse6bVXWMqiTEbjr_33a/view?usp=sharing"
              target="_blank"
              style={{ color: "#E16036" }}
            >
              resume
            </Link>
            .
          </Typography>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
