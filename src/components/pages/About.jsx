import React from "react";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";
import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/bg-header.jpg";
import AboutImage from "draws/About";
import InstImage1 from "assets/instructors/inst1.jpg";
import InstImage2 from "assets/instructors/inst2.jpg";
import InstImage3 from "assets/instructors/inst3.jpg";
import InstImage4 from "assets/instructors/inst4.jpg";
import InstImage5 from "assets/instructors/inst5.jpg";
import InstImage6 from "assets/instructors/inst6.jpg";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  { id: "1", name: "Thor", avatar: InstImage1 },
  { id: "2", name: "Mel", avatar: InstImage2 },
  { id: "3", name: "Bolinha", avatar: InstImage3 },
  { id: "4", name: "Mike", avatar: InstImage4 },
  { id: "5", name: "Emmy", avatar: InstImage5 },
  { id: "6", name: "Bob", avatar: InstImage6 },
];

const items = [{ label: "Início", link: "/" }, { label: "Sobre" }];

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola</h1>
      </Heading>
      <BreadCrumb items={items} />
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
      <Grid sm={2} md={3} lg={4}>
        {instructors.map((instructor) => (
          <Card key={instructor.id}>
            <CardMedia image={instructor.avatar}>
              <CardMediaDescription>
                <h5>{instructor.name}</h5>
              </CardMediaDescription>
            </CardMedia>
          </Card>
        ))}
      </Grid>
    </Section>
    <Footer />
  </>
);

export default About;
