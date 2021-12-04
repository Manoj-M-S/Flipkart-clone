import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
  } = CartState();

  return (
    <div className="products">
      <Card >
        <Card.Img variant="top" src={prod.image} alt={prod.name} width="500px" height="350px" />
        <Card.Body>
          <Card.Title font-size="1px">{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price}</span>
            {prod.sizeM && 
              <div>Size : M</div>
            }
            {prod.sizeS && 
              <div>Size : S</div>
            }
            {prod.sizeL && 
              <div>Size : L</div>
            }
            {prod.sizeXl && 
              <div>Size : XL</div>
            }
            
            {prod.brandGucci && 
              <div>GUCCI</div>
            }
            {prod.brandLV && 
                          <div>LV</div>
            }
            {prod.brandSupreme && 
                          <div>Supreme</div>
            }
            {prod.brandPuma && 
                          <div>Puma</div>
            }
            {prod.brandNike && 
                          <div>Nike</div>
            }
            
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
