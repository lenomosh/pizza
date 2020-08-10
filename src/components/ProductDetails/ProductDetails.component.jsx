import React, { useState } from "react";

const ProductDetails = ({
  location: {
    state: { product },
  },
}) => {
    const crustings =[
        {
            name:"Scrispy",
            price:250
        },{
            name:"Stuffed",
            price:250
        },{
            name:"Glottin-free",
            price:250
        }
]
const [selectedCrusting, setselectedCrusting] = useState(null)
  const [success, setSuccess] = useState(false);
  const [meatToppings, setMeatToppings] = useState([
    {
      name: "Extra Macon",
      price: 200,
    },
    {
      name: "Extra Bqb Chicken",
      price: 200,
    },
    {
      name: "Extra Bqb Steak",
      price: 200,
    },
    {
      name: "Extra Chicken Tikka",
      price: 200,
    },
    {
      name: "Extra Sandwich Beef",
      price: 200,
    },
    {
      name: "Extra Peperoni",
      price: 200,
    },
    {
      name: "Extra Chicken",
      price: 200,
    },
  ]);
  const [vegetableToppings, setVegetableToppings] = useState([
    {
      name: "Extra Chilli",
      price: 150,
    },
    {
      name: "Extra Mushrooms",
      price: 150,
    },
    {
      name: "Extra Olives",
      price: 150,
    },
    {
      name: "Extra Onions",
      price: 150,
    },
    {
      name: "Extra Pineapple",
      price: 150,
    },
    {
      name: "Extra Sweetcorn",
      price: 150,
    },
    {
      name: "Extra Tomatoes",
      price: 150,
    },
  ]);
  const [selectedPizza, setSelectedPizza] = useState(product);
  const refresh = () => {
    window.location.href = "/";
  };
  const [cartItems, setcartItems] = useState([]);
  const pizzaSizes = [
    {
      name: "Pizza Pie",
      price: 300,
    },
    {
      name: "Regular",
      price: 700,
    },
    {
      name: "Medium",
      price: 900,
    },
    {
      name: "Large",
      price: 1200,
    },
  ];
  const calcTotal = () => {
    const cartCopy = JSON.parse(JSON.stringify(cartItems));
    let total = cartCopy.map(({ price }) => price);
    let newTotal =
      total.length > 0 && total.reduce((prevVal, newVal) => prevVal + newVal);
      if (selectedCrusting) {
          
      }
      newTotal += selectedCrusting && selectedCrusting.price
    return selectedPizza && selectedPizza.price + newTotal;
  };
  const inCart = (product) => {
    const find =
      cartItems && cartItems.filter((element) => element.name === product.name);
    return find.length > 0;
  };
  const handleAddToCart = (event, product) => {
    event.preventDefault();
    const cartCopy = JSON.parse(JSON.stringify(cartItems));
    console.log(cartCopy.length);
    const find = cartItems.filter((element) => element.name === product.name);

    console.log("index of", cartCopy.indexOf(find[0]));
    if (find.length > 0) {
      console.log("find length", find);
      const removed = cartItems.filter(
        (element) => element.name !== find[0].name
      );
      console.log("removed", removed);
      console.log(cartCopy.length);
      setcartItems([removed]);
    } else {
      console.log(cartCopy);
      setcartItems([...cartCopy, product]);
    }
  };
  return (
    <div className="container">
      <div className="row">
        {!success ? (
          <div className="row">
            <div className="col-md-9">
              <h3>Pizza Size</h3>
              <div className="row">
                {pizzaSizes.map((element) => (
                  <div key={element.name} className="col-md-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedPizza(element);
                      }}
                      className={`btn btn-xs  btn-block "+ ${
                        selectedPizza.name === element.name && "btn-success"
                      }`}
                    >
                      <h4>{element.name}</h4> @ <i>KES. {element.price}</i>
                    </button>
                  </div>
                ))}
              </div>
              <br />
              <h3>Crustings</h3>
              <div className="row">
                {crustings.map((element) => (
                  <div key={element.name} className="col-md-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setselectedCrusting(element);
                      }}
                      className={`btn btn-xs  btn-block "+ ${
                        selectedCrusting && selectedCrusting.name ===element.name && "btn-success"
                      }`}
                    >
                      <h4>{element.name}</h4> @ <i>KES. {element.price}</i>
                    </button>
                  </div>
                ))}
              </div>
              <br />
              <h3>Meat Toppings</h3>
              <hr />
              <div className="row">
                {meatToppings.map((element) => (
                  <div key={element.name} className="col-md-3 py-4">
                    <button
                      onClick={(e) => handleAddToCart(e, element)}
                      className={`btn btn-xs  btn-block "+ ${
                        inCart(element) && "btn-success"
                      }`}
                    >
                      <h4>{element.name}</h4> @ <i>KES. {element.price}</i>
                    </button>
                  </div>
                ))}
              </div>
              <br />
              <h3>Chicken Toppings</h3>
              <hr />
              <div className="row">
                {vegetableToppings.map((element) => (
                  <div key={element.name} className="col-md-3 py-4">
                    <button
                      onClick={(e) => handleAddToCart(e, element)}
                      className={`btn btn-xs  btn-block "+ ${
                        inCart(element) && "btn-success"
                      }`}
                    >
                      <h4>{element.name}</h4> @ <i>KES. {element.price}</i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-3">
              <h3>Cart</h3>
              <table className="table">
                <thead>
                  <tr>
                    <td>
                      <h4>{product.name}</h4>
                    </td>
                    <td>
                      <h4>{selectedPizza.price}</h4>
                    </td>
                  </tr>
                </thead>
                <tbody>
                    {selectedCrusting && <tr>
                        <td>{selectedCrusting.name}</td>
                        <td>{selectedCrusting.price}</td>
                        </tr>}
                  {cartItems.map((element) => (
                    <tr key={element.name + element.price}>
                      <td>{element.name}</td>
                      <td>{element.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <h3>Total</h3>
                    </td>
                    <td>
                      <h3>{calcTotal()}</h3>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <button
                onClick={() => setSuccess(true)}
                className="btn btn-block"
              >
                CheckOut
              </button>
            </div>
          </div>
        ) : (
            <div className="col-md-12">

          <div className="alert alert-success" role="alert">
            <p>
              The order was place successfully. Kindly await for a confirmation
            </p>
            <button onClick={() => refresh()} className="btn btn-success">
              {" "}
              Okay
            </button>
          </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
