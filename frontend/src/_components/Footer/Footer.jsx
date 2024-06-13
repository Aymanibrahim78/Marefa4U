import "./Footer.css";
import { Container, Stack, Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          gap={5}
          py={10}
          flexWrap={"wrap"}
          sx={{ justifyContent: "space-between", color: "#E8DBD5" }}
        >
          <Box sx={{ width: { xs: "100%", xs: "45%", lg: "35%" } }}>
            <Image
              src="https://res.cloudinary.com/dixyny2zj/image/upload/v1718217199/Logo-website-Marefa4u_nennrj.png"
              alt="Logo Image"
              width={150}
              height={60}
            />
            <Typography variant="p" component="p">
              "Marefa4u" is your ultimate destination for free courses in
              various fields. Our goal is to empower everyone to access
              knowledge and learn easily with high quality. Join us today and
              start your educational journey for free!
            </Typography>

            <Stack direction={"row"} my={3} gap={2.5}>
              <IconButton>
                {" "}
                <XIcon />
              </IconButton>
              <IconButton>
                {" "}
                <FacebookIcon />
              </IconButton>
              <IconButton>
                {" "}
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Box>

          <Stack
            direction={"row"}
            gap={5}
            flexWrap={"wrap"}
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: { xs: "100%", xs: "45%", lg: "60%" } }}
          >
            <Box>
              <ul>
                <li>
                  <Link style={{ all: "unset" }} href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link style={{ all: "unset" }} href="/instructor">
                    Instructor
                  </Link>
                </li>
                <li>
                  <Link href="/category">Category</Link>
                </li>
              </ul>
            </Box>

            <Box>
              <ul>
                <li>
                  <Link style={{ all: "unset" }} href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link style={{ all: "unset" }} href="/course">
                    Our Courses
                  </Link>
                </li>
                <li>
                  <Link style={{ all: "unset" }} href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link style={{ all: "unset" }} href="/contactus">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link style={{ all: "unset" }} href="/faq">
                    faq
                  </Link>
                </li>
              </ul>
            </Box>
          </Stack>
        </Stack>

        <Typography
          variant="p"
          component="p"
          sx={{ textAlign: "center", color: "#E8DBD5", py: 5 }}
        >
          © Copyright {new Date().getFullYear()} , All Rights Reserved by{" "}
          <a style={{all:"unset"}} href="https://www.facebook.com/AymanIbrahim.official" target="_blank" ><span className="dev-ayman">Ayman Ibrahim</span></a>
          
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
