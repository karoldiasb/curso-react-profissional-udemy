import PlaceholderImage from "stories/assets/bg-car.jpg";

const products = [
  {
    id: 1,
    title: "1ª Habilitação Carro e Moto",
    slang: "primeira-habilitacao-carro-e-moto",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 2,
    title: "1ª Habilitação Carro",
    slang: "primeira-habilitacao-carro",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 3,
    title: "1ª Habilitação Moto",
    slang: "primeira-habilitacao-moto",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    slang: "mudanca-de-categoria-caminhao",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    slang: "aulas-avulsas",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
];
export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};
