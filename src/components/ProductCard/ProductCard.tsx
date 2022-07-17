import React from "react";

import Product from "../../types/product";

import "./ProductCard.css";

interface ProductProps {
  product: Product;
}

const ProductCard = (props: ProductProps) => {
  const { product } = props;

  if (!product || !product.id) {
    return null;
  }

  return (
    <div className="product-root" data-testid={`product-card-${product.id}`}>
      <div className="product-basic-info">
        <img
          alt={`${product.product}`}
          src={product.image}
          className="product-image"
        />
        <div className="product-info">
          <div className="font-weight-bold">{product.product}</div>
          <div className="show-next-line">{product.name}&nbsp;&#8482;</div>
          <div className="show-next-line">
            &#x1F4CB;&nbsp; {product.description}
          </div>
          <div className="show-next-line">&#x26AB;&nbsp; {product.color}</div>
          <div className="show-next-line">
            &#x1F4C1;&nbsp; {product.department}
          </div>
          <div className="show-next-line">
            &#x1F004;&nbsp; {product.material}
          </div>
          <div className="show-next-line">&#x1F4B5;&nbsp; {product.price}</div>
          <div className="show-next-line">
            &#x1F4C5;&nbsp; {product.manufacturedOn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
