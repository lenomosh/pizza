import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={product.image} alt="Card image cap" />
      <div className="card-body center">
        <h4 className="card-title">{product.name}</h4>
        <div className="row">
          <div className="col-md-12">
            <h5>KES {product.price}</h5>
          </div>
          <div className="col-md-12">
            <Link
              to={{
                pathname: "/cart",
                state: {
                  product,
                },
              }}
              className="btn btn-xs"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
