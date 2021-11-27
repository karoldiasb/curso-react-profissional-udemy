import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Callout, {
  CalloutBody,
  CalloutAction,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/bg-header.jpg";
import SpeedImage from "draws/Speed";
import BreadCrumb from "components/atoms/BreadCrumb";
import ProductType from "types/ProductType";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = ({ product }) => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>{product.title}</h1>
      </Heading>
      <BreadCrumb
        items={[
          { label: "Início", link: "/" },
          { label: "Serviços" },
          { label: product.title },
        ]}
      />
    </Hero>
    <Section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        odit assumenda error blanditiis quos aperiam at tempore omnis quibusdam
        tempora illo vel, velit architecto quisquam quae magni eligendi autem
        distinctio!
      </p>
      <p>
        Quas vero amet nobis, odio totam praesentium non voluptas quis dicta,
        quam sint omnis vitae optio iste, adipisci voluptatum. Pariatur
        laboriosam, architecto numquam explicabo harum magni velit.
        Perspiciatis, fugit suscipit.
      </p>
      <p>
        Ipsa minus nihil provident quam ab eaque vitae magni natus maxime
        quibusdam eos vel inventore impedit maiores porro, accusantium, est
        aspernatur totam qui consectetur officia. Repellat tempore numquam quos
        sapiente?
      </p>
      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll /> Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome /> Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Título</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            officiis corrupti! Vitae perferendis vel distinctio amet officiis
            sit necessitatibus ullam reprehenderit modi doloribus blanditiis
            eaque, repellat porro voluptatum veniam illum!
          </p>
          <CalloutAction>
            <Button color="primary">Matricular</Button>
          </CalloutAction>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.propTypes = {
  product: ProductType,
};

export default ProductDetail;
