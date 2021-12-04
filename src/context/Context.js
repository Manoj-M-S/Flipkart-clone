import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [{
    id: 1,
    name: "Full Sleeve Solid Men Quilte",
    price: 523,
    image: "https://rukminim1.flixcart.com/image/580/696/kflftzk0/jacket/p/z/z/xxl-1285-fk-breil-by-fort-collins-original-imafwyyegzzyx6s5.jpeg?q=50",
    inStock: 3,
    sizeM: true,
    brandPuma : true,
    ratings: 5
  }, {id: 1,
    name: "Solid Men Round Neck Blue",
    price: 289,
    image: "https://rukminim1.flixcart.com/image/580/696/ktketu80/t-shirt/4/0/e/m-fc4054-fastcolors-original-imag6vt77a25swua.jpeg?q=50",
    inStock: 3,
    
    sizeS: true,
    brandNike : true,
    ratings: 5}, {id: 1,
      name: "Full Sleeve Solid Men Quilted",
      price: 861,
      image: "https://rukminim1.flixcart.com/image/580/696/keuagsw0/jacket/f/c/u/m-blaw20jkt07a-billion-original-imafvehsmhcg77zy.jpeg?q=50",
      inStock: 3,
      sizeS: true,
       brandSupreme : true,
      ratings: 5},{
        id: 1,
        name: "Men Regular Fit Solid Spread",
        price: 399,
        image: "https://rukminim1.flixcart.com/image/580/696/keuagsw0-0/t-shirt/a/a/1/s-4050-4054-fastcolors-original-imafvexe7bzvjgh9.jpeg?q=50",
        inStock: 3,
        
    sizeL: true,
    brandNike : true,

        ratings: 5
      }, {id: 1,
        name: "Men Slim Fit Solid Slim Colla",
        price: 439,
        image: "https://rukminim1.flixcart.com/image/580/696/k6fd47k0/shirt/e/u/v/l-c301-dustygreen-dennis-lingo-original-imafzvvr7q8zn9kh.jpeg?q=50",
        inStock: 3,
        sizeL: true,
        brandGucci : true,
        ratings: 5}, {id: 1,
          name: "Striped Men Polo Neck Whit",
          price: 320,
          image: "https://rukminim1.flixcart.com/image/580/696/kl9rssw0/jacket/9/m/z/m-m7aw20jkt023b-m7-by-metronaut-original-imagyfhjcnd5rmwg.jpeg?q=50",
          inStock: 3,
          
        sizeXl: true,
        brandLV : true,
          ratings: 5} ]

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    bySizeM: false,
    bySizeS: false,
    bySizeL: false,
    bySizeXl: false,
    ByGucci:false,
    ByLV:false,
    ByPuma : false,
    ByNike: false,
    Bysupreme : false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
