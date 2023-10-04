import ScrollableList from "../../../Components/ScrollableList/ScrollableList";
import SearchInput from "../../../Elements/SearchInput/SearchInput";
import "./style.scss";
import { CONTENT } from "../../../Constants/data";
import FoodCard from "../../../Components/ProductCard/FoodCard";
import CartCard from "../../../Components/ProductCard/CartCard";
import { Box } from "@mui/material";
import ICONS from "../../../Assets/icons";

export default function POSLayout({}) {
  return (
    <section className="POS-container">
      <div className="content-area">
        <Box className="content-area-navbar">
          <Box className="flex align-center">
            <ICONS.ARROW_BACK
              style={{
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            />
            <p className="fw-bold">Order ID: 983437</p>
          </Box>
        </Box>
        <div className="content-area-header">
          <div className="content-prefix">
            <h3 className="fw-bold">Choose Category</h3>
          </div>
          <div className="content-suffix">
            <SearchInput />
          </div>
        </div>
        <div className="clearfix-20"></div>
        <div className="content-area-body">
          <ScrollableList
            data={CONTENT.categories}
            selected={3}
            handleChange={() => {}}
          />
        </div>
        <div className="clearfix-20"></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4 className="fw-500">Coffee Menu</h4>
          <h6 className="fw-500">12 results</h6>
        </div>
        <div className="clearfix-20"></div>
        <div className="row gy-3">
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
          <FoodCard data={{}} isCart={true} />
        </div>
      </div>
      <div className="cart-area">
        <div className="cart-area-header">
          <h3 className="fw-bold">Current Order</h3>
        </div>
        <div className="clearfix-20"></div>
        <div className="cart-area-body">
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </div>
    </section>
  );
}
