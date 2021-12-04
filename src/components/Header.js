
import {
  Container,
  Navbar,FormControl
} from "react-bootstrap";
import { Link, } from "react-router-dom";
import "./styles.css";

const Header = () => {

  return (
    <Navbar style={{ height: 80, backgroundColor:"rgb(0, 102, 255)" }}>
      <Container>
        <Navbar.Brand style={{color:"white"}}> 
          <Link to="/"><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png" alt="Flipkar" width = "100px"/></Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
            />
          </Navbar.Text>
          
      </Container>
    </Navbar>
  );
};

export default Header;