import React from "react";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";

import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import ButtonWrapper from "components/atoms/Button";
import HeroImage from "assets/bg-header.jpg";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";

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
  </>
);

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
