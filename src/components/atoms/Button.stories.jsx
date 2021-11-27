import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

const ButtonsWrapper = (props) => (
  <div>
    <p>Enabled: </p>
    <Toolbar>
      <Button {...props} {...events}>
        Default
      </Button>
      <Button {...props} {...events} color="primary">
        Primary
      </Button>
      <Button {...props} {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>As a link: </p>
    <Toolbar>
      <Button as="a" href="#" {...props} disabled {...events}>
        Default
      </Button>
      <Button as="a" href="#" {...props} disabled {...events} color="primary">
        Primary
      </Button>
      <Button as="a" href="#" {...props} disabled {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled: </p>
    <Toolbar>
      <Button {...props} disabled {...events}>
        Default
      </Button>
      <Button {...props} disabled {...events} color="primary">
        Primary
      </Button>
      <Button {...props} disabled {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const usage = () => <ButtonsWrapper />;

export const outlined = () => <ButtonsWrapper variant="outlined" />;

export const link = () => <ButtonsWrapper variant="link" />;
