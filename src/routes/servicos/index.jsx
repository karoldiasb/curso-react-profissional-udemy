import React from "react";

import { useParams } from "react-router-dom";
import ProductDetailPage from "components/pages/ProductDetail";
import Error from "components/pages/Error";

import NotFoundImage from "draws/About";

import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";

const ProductDetail = () => {
  useScrollToTop();
  const { slang } = useParams(); //parâmetro definido na nomeação da rota (index.jsx) => <Route path="/servicos/:slang" element={<ProductDetail />} />
  const product = useProduct({ slang });

  if (!product) {
    return (
      <Error
        title="Serviço não encontrado"
        description="Serviço não encontrado ou não disponível"
        image={<NotFoundImage />}
      />
    );
  }
  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
