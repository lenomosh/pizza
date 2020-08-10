import React, { useState } from "react";
import "./App.scss";
import ProductCard from "./components/ProductCard/ProductCard.component";
import ProductDetails from "./components/ProductDetails/ProductDetails.component";
import { Switch, Route } from "react-router-dom";

function App() {
  const pizzas = [
    {
      name: "Chicken Mushroom Pizza",
      price: 1080,
      image: "images/chickenmushrooms.jpg",
    },
    {
      name: "Deep Dish Pizza",
      price: 1250,
      image: "images/deep-dish-pizza.jpg",
    },
    {
      name: "Dessert Pizza",
      price: 1050,
      image: "images/dessert-pizza.jpg",
    },
    {
      name: "Mergherita Pizza",
      price: 700,
      image: "images/mergherita.jpeg",
    },
    {
      name: "Hawalinza Pizza",
      price: 1200,
      image: "images/download.jpeg",
    },
    ,
    {
      name: "Dominos Pizza",
      price: 850,
      image: "images/dominos-pizza.jpg",
    },
  ];

  return (
    <div className="container center">
      <Switch>
        <Route exact path="/cart" component={ProductDetails} />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1 className="text-center">Pizza Center</h1>
              <h3 className="text-center">
                Welcome to Pizza Center, please select the pizza you want
              </h3>
              <div className="row">
                {pizzas.map((element) => (
                  <div className="col-md-4 py-4">
                    <ProductCard product={element} />
                  </div>
                ))}
              </div>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
