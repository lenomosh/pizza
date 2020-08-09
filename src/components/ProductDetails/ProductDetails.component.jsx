import React from 'react'

const ProductDetails = ({product}) => {
    const [crustings, setCrustings] = useState([
        {
            name:"Crispy",
            price:200
        },{
            name:"Stuffed",
            price:200
        },{
            name:"Glotting Free",
            price:200
        }
    ])
    const [meatToppings, setMeatToppings] = useState([
        {
            name:"Extra Macon",
            price:200
        },{
            name:"Extra Bqb Chicken",
            price:200
        },{
            name:"Extra Bqb Steak",
            price:200
        },{
            name:"Extra Chicken Tikka",
            price:200
        },{
            name:"Extra Sandwich Beef",
            price:200
        },{
            name:"Extra Peperoni",
            price:200
        },{
            name:"Extra Chicken",
            price:200
        }
    ])
    const [vegetableToppings, setVegetableToppings] = useState([
        {
            name:'Extra Chilli',
            price:150
        },{
            name:'Extra Mushrooms',
            price:150
        },{
            name:'Extra Olives',
            price:150
        },{
            name:'Extra Onions',
            price:150
        },{
            name:'Extra Pineapple',
            price:150
        },{
            name:'Extra Sweetcorn',
            price:150
        },{
            name:'Extra Tomatoes',
            price:150
        }
    ])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    
                </div>
                <div className="col-md-3">

                </div>
            </div>
            
        </div>
    )
}

export default ProductDetails
