import React from "react";

import Callout, { CalloutBody, CalloutAction, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Título</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, officiis
        corrupti! Vitae perferendis vel distinctio amet officiis sit
        necessitatibus ullam reprehenderit modi doloribus blanditiis eaque,
        repellat porro voluptatum veniam illum!
      </p>
      <CalloutAction>
        <Button color="primary">Matricular</Button>
      </CalloutAction>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);
