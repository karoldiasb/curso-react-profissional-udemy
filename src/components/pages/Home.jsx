import React from "react";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";

import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import ButtonWrapper from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import HeroImage from "assets/bg-header.jpg";
import AboutVideo from "assets/about.mp4";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import PlaceholderImage from "stories/assets/bg-car.jpg";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

const products = [
  {
    id: 1,
    title: "1ª Habilitação Carro e Moto",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 2,
    title: "1ª Habilitação Carro",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 3,
    title: "1ª Habilitação Moto",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
];

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          <span>
            Ganhe sua <strong>liberdade</strong>
            <br /> para ir e vir
          </span>
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
      </ul>
      <ButtonWrapper color="primary" variant="outlined">
        Matricule-se agora
      </ButtonWrapper>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Auto escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus
            quia totam, sed aspernatur omnis hic eaque perferendis ex.
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
        <AccordionGroup>
          <Accordion title="Como eu renovo minha CNH?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et
            explicabo iste, odio quam tempore, nobis impedit accusantium
            quisquam culpa velit ratione dolores. Maiores, sunt tempora. Odit
            perspiciatis nisi velit!
          </Accordion>
          <Accordion title="Como faço a mudança de categoria?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et
            explicabo iste, odio quam tempore, nobis impedit accusantium
            quisquam culpa velit ratione dolores. Maiores, sunt tempora. Odit
            perspiciatis nisi velit!
          </Accordion>
          <Accordion title="Fui multado, e agora?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et
            explicabo iste, odio quam tempore, nobis impedit accusantium
            quisquam culpa velit ratione dolores. Maiores, sunt tempora. Odit
            perspiciatis nisi velit!
          </Accordion>
        </AccordionGroup>
      </Heading>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
