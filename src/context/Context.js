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
    men:true,
    brandPuma : true,
    ratings: 5
  }, {id: 1,
    name: "Full Sleeve Women dress",
    price: 289,
    image: "https://rukminim1.flixcart.com/image/580/696/kikluvk0-0/sweatshirt/d/0/o/m-princess-hoodie-divra-clothing-original-imafybsxg6zadxmz.jpeg?q=50",
    inStock: 3,
    women: true,
    sizeS: true,
    brandNike : true,
    ratings: 5}, {id: 1,
      name: "Full Sleeve Solid Men Quilted",
      price: 861,
      image: "https://rukminim1.flixcart.com/image/580/696/keuagsw0/jacket/f/c/u/m-blaw20jkt07a-billion-original-imafvehsmhcg77zy.jpeg?q=50",
      inStock: 3,
      sizeS: true,
      men:true,
       brandSupreme : true,
      ratings: 5},{
        id: 1,
        name: "Full Sleeve Solid Women dress",
        price: 399,
        image: "https://rukminim1.flixcart.com/image/580/696/jz8qf0w0/sweatshirt/y/d/5/xxl-wm17-ss01-wine-alan-jones-original-imafjavc46zffub9.jpeg?q=50",
        inStock: 3,
        women: true,
    sizeL: true,
    brandNike : true,

        ratings: 5
      }, {id: 1,
        name: "Men Slim Fit Solid Slim Colla",
        price: 439,
        image: "https://rukminim1.flixcart.com/image/580/696/k6fd47k0/shirt/e/u/v/l-c301-dustygreen-dennis-lingo-original-imafzvvr7q8zn9kh.jpeg?q=50",
        inStock: 3,
        sizeL: true,
        men:true,
        brandGucci : true,
        ratings: 5}, {id: 1,
          name: "Striped Women Polo Neck White",
          price: 320,
          image: "https://rukminim1.flixcart.com/image/580/696/kirr24w0-0/sweatshirt/r/c/j/xs-dancing-girl-hoodie-w-divra-clothing-original-imafyhwuuqpctabc.jpeg?q=50",
          inStock: 3,
          women: true,
        sizeXl: true,
        brandLV : true,
          ratings: 5} ]

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byMen : false,
    byWomen: false,
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
