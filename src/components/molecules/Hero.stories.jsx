import React from "react";

import Hero from "./Hero";
import bgHeaderImage from "../../stories/assets/bg-header.jpg";
import bgCarImage from "../../stories/assets/bg-header.jpg";
import Heading from "../atoms/Heading";
import ButtonWrapper from "../atoms/Button";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bgHeaderImage}>
    <h1>Ganhe sua liberdade para ir e vir</h1>
    <p>A auto escola líder em aprovação</p>
  </Hero>
);

export const withList = () => (
  <Hero image={bgCarImage}>
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
);
