import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={product.image} alt="Card image cap" />
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <div className="row">
          <div className="col-md-6">
            <h5>KES {product.price}</h5>
          </div>
          <div className="col-md-6">
            <a href="#" className="btn btn-xs btn-primary">
              <FontAwesomeIcon icon="coffee" />
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
