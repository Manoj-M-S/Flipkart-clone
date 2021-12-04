export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
      
    case "FILTER_BY_GENDERM":
      return { ...state, byMen: !state.byMen };
      
    case "FILTER_BY_GENDERW":
      return { ...state, byWomen: !state.byWomen };

    case "FILTER_BY_SIZE_M":
      return { ...state, bySizeM: !state.bySizeM };
    case "FILTER_BY_SIZE_S":
      return { ...state, bySizeS: !state.bySizeS  };
    case "FILTER_BY_SIZE_L":
      return { ...state, bySizeL : !state.bySizeL };
    case "FILTER_BY_SIZE_XL":
      return { ...state, bySizeXl: !state.bySizeXl };    
    case "FILTER_BY_BRAND_GUCCI":
      return { ...state, byGucci: !state.byGucci };   
      case "FILTER_BY_BRAND_LV":
        return { ...state, byLV: !state.byLV };   
        case "FILTER_BY_BRAND_SUPREME":
          return { ...state, bySupreme: !state.bySupreme };   
          case "FILTER_BY_BRAND_PUMA":
            return { ...state, byPuma: !state.byPuma };   
            case "FILTER_BY_BRAND_NIKE":
              return { ...state, byNike: !state.byNike };   
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return { byStock: false, byFastDelivery: false, byRating: 0 };
    default:
      return state;
  }
};
