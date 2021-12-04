import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { sort,byMen,byWomen,  bySizeM,
      bySizeS,
      bySizeL,
      bySizeXl,
      byGucci,
      byLV,
      byPuma,
      byNike,
      bySupreme, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (byMen) {
      sortedProducts = sortedProducts.filter((prod) => prod.men);
    }
    if (byWomen) {
      sortedProducts = sortedProducts.filter((prod) => prod.women);
    }
    if (bySizeM) {
      sortedProducts = sortedProducts.filter((prod) => prod.sizeM);
    }
    if (bySizeS) {
      sortedProducts = sortedProducts.filter((prod) => prod.sizeS);
    }
    if (bySizeL) {
      sortedProducts = sortedProducts.filter((prod) => prod.sizeL);
    }
    if (bySizeXl) {
      sortedProducts = sortedProducts.filter((prod) => prod.sizeXl  );
    }
    if (byLV) {
      sortedProducts = sortedProducts.filter((prod) => prod.brandLV  );
    }
    if (byPuma) {
      sortedProducts = sortedProducts.filter((prod) => prod.brandPuma  );
    }
    if (byNike) {
      sortedProducts = sortedProducts.filter((prod) => prod.brandNike  );
    }
    if (bySupreme) {
      sortedProducts = sortedProducts.filter((prod) => prod.brandSupreme  );
    }
    if (byGucci) {
      sortedProducts = sortedProducts.filter((prod) => prod.brandGucci  );
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
