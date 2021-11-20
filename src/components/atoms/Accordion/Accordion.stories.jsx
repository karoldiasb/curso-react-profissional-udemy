import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";
export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et explicabo
      iste, odio quam tempore, nobis impedit accusantium quisquam culpa velit
      ratione dolores. Maiores, sunt tempora. Odit perspiciatis nisi velit!
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et explicabo
      iste, odio quam tempore, nobis impedit accusantium quisquam culpa velit
      ratione dolores. Maiores, sunt tempora. Odit perspiciatis nisi velit!
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et explicabo
      iste, odio quam tempore, nobis impedit accusantium quisquam culpa velit
      ratione dolores. Maiores, sunt tempora. Odit perspiciatis nisi velit!
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et explicabo
      iste, odio quam tempore, nobis impedit accusantium quisquam culpa velit
      ratione dolores. Maiores, sunt tempora. Odit perspiciatis nisi velit!
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et explicabo
      iste, odio quam tempore, nobis impedit accusantium quisquam culpa velit
      ratione dolores. Maiores, sunt tempora. Odit perspiciatis nisi velit!
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et explicabo
      iste, odio quam tempore, nobis impedit accusantium quisquam culpa velit
      ratione dolores. Maiores, sunt tempora. Odit perspiciatis nisi velit!
    </Accordion>
  </AccordionGroup>
);
