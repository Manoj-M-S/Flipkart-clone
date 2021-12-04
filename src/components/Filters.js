import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productDispatch,
    productState: { 
      byMen,
      byWomen,
      bySizeM,
      bySizeS,
      bySizeL,
      bySizeXl,
      byGucci,
      byLV,
      byPuma,
      byNike,
      bySupreme,sort},
  } = CartState();

  // make state for rating

  return (
    <div className="filters">
      <span className="title">Filters</span>
<div><h6>Sort By Price</h6><span>
        <Form.Check
          inline
          label="low to high"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <br/>
      <span>
        <Form.Check
          inline
          label="High to low"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span></div>
            <br/>
      <div>
 <h6>Select Size</h6>
            <span>
        <Form.Check
          inline
          label="M"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_SIZE_M",
            })
          }
          checked={bySizeM}
        />
      </span>
      <br/>
      <span>
        <Form.Check
          inline
          label="S"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_SIZE_S",
            })
          }
          checked={bySizeS}
        />
      </span>
      <br/>

      <span>
        <Form.Check
          inline
          label="L"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_SIZE_L",
            })
          }
          checked={bySizeL}
        />
      </span>
      <br/>

      <span>
        <Form.Check
          inline
          label="XL"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_SIZE_XL",
            })
          }
          checked={bySizeXl}
        />
      </span>
      <br/>
      </div>
     <br/>
<div>
            <h6>Select Brand</h6>

            <span>
        <Form.Check
          inline
          label="Nike"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_BRAND_NIKE",
            })
          }
          checked={byNike}
        />
      </span>
      <br/>

      <span>
        <Form.Check
          inline
          label="Puma"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_BRAND_PUMA",
            })
          }
          checked={byPuma}
        />
      </span>
      
      <br/>
      <span>
        <Form.Check
          inline
          label="Gucci"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_BRAND_GUCCI",
            })
          }
          checked={byGucci}
        />
      </span>
      <br/>

      <span>
        <Form.Check
          inline
          label="LV"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_BRAND_LV",
            })
          }
          checked={byLV}
        />
      </span>
      <br/>

      <span>
        <Form.Check
          inline
          label="Supreme"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_BRAND_SUPREME",
            })
          }
          checked={bySupreme}
        />
      </span></div>
      <br/>
      <div><h6>Ideal for</h6><span>
        <Form.Check
          inline
          label="Men"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_GENDERM"
            })
          }
          checked={byMen}
        />
      </span>
      <br/>
      <span>
        <Form.Check
          inline
          label="Women"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_GENDERW"
            })
          }
          checked={byWomen}
        />
      </span></div>
      <br/>
      <Button
      className= "button"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
