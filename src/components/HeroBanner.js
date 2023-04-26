import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#16355E" fontWeight="600" fontSize="26px">
    Execução Perfeita: Exemplos de Exercícios Físicos com Foco na Técnica Correta
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Faça o seu melhor <br />
      SEMPRE
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
    Bem-vindo ao nosso site de exemplos de exercícios físicos com foco na execução correta dos movimentos! 
    Aqui você encontrará uma ampla variedade de exemplos  detalhados passo a passo para ajudá-lo (a) a executar cada movimento da maneira correta e segura.
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#5858A5",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
       Explorar Exercícios 
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#5858A5"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercícios 
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
