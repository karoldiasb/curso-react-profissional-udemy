import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";

import HeroImage from "assets/bg-header.jpg";
import AboutImage from "draws/About";
import Footer from "components/organisms/Footer";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            quisquam repellendus repudiandae, officiis doloremque a assumenda
            beatae, aspernatur optio fugiat laudantium asperiores sit illo quam,
            voluptate animi numquam ipsum earum.
          </p>
          <p>
            Porro odio iste tempore, culpa magnam laborum accusamus corporis
            esse excepturi, voluptatem illum. Natus eius libero distinctio
            beatae necessitatibus numquam ratione suscipit voluptatem nihil
            minima, qui cupiditate hic corrupti autem!
          </p>
          <p>
            Recusandae placeat cupiditate iusto accusantium, tempore repudiandae
            quis, autem quas harum nulla similique ullam amet doloribus facilis
            sint unde quibusdam asperiores, voluptas dolor atque! Suscipit
            minima similique architecto inventore accusantium.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            inventore alias laboriosam tempora! Necessitatibus quasi ab nulla!
            Nobis, vero tempora dignissimos eum corrupti dolor pariatur
            necessitatibus similique laboriosam! Enim, odit?
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium et vel fugiat nobis dolorum neque accusamus expedita, ad
            molestiae aspernatur id nostrum fuga rem, eos enim delectus ullam?
            Inventore, eos?
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Dolor saepe incidunt iusto laborum adipisci aperiam quisquam sed
            tempora iste magnam reprehenderit placeat ullam ratione, libero
            voluptatem facilis et ducimus. Veritatis, odit sed corrupti
            exercitationem eaque eius ipsam ex.
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
