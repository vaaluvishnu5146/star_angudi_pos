import TextInput from "../../../Elements/TextInput/TextInput";
import Radio from "../../../Elements/Radio/Radio";
import Select from "../../../Elements/Select/Select";
import Checkbox from "../../../Elements/Checkbox/Checkbox";
import ButtonC from "../../../Elements/Buttons/Button";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="container-fluid">
        <h1 className="mb-3">Create Product</h1>
        <div className="row mb-3">
          <div className="col-4">
            <TextInput
              label="Food Name"
              type="text"
              placeholder="Enter Name"
              id="name"
              name="name"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="col-4">
            <TextInput
              label="Food Description"
              type="text"
              placeholder="Enter Description"
              id="description"
              name="description"
              value=""
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <Radio
              name="foodType"
              label="Select Food Type"
              options={[
                { name: "Veg", id: "veg" },
                { name: "Non Veg", id: "non-veg" },
              ]}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <Select label="Select Cuisine" id="cuisine" name="cuisine" />
          </div>
          <div className="col-4">
            <Select label="Select Category" id="category" name="category" />
          </div>
          <div className="col-4">
            <Select label="Select Offer" id="offer" name="offer" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <TextInput
              label="Normal Price"
              type="number"
              placeholder="Enter Normal Price"
              id="normalPrice"
              name="pricingDetails"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="col-4">
            <TextInput
              label="Actual Price"
              type="number"
              placeholder="Enter Actual Price"
              id="actualPrice"
              name="pricingDetails"
              value=""
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <Checkbox
              name="foodDetails"
              label="Food Details"
              options={[
                { id: "isSpicy", name: "Is Spicy" },
                { id: "isSweet", name: "Is Sweet" },
              ]}
              value={true}
              handleChange={() => {}}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <Checkbox
              name="basicDetails"
              label="Basic Details"
              options={[
                { id: "isAvailable", name: "Is Available" },
                { id: "isTrending", name: "Is Trending" },
                { id: "isFeatured", name: "Is Featured" },
              ]}
              value={true}
              handleChange={() => {}}
            />
          </div>
        </div>
        <div className="row">
          <div className="d-flex align-items-center justify-content-end">
            <ButtonC
              label="Create Product"
              isLoading={false}
              onClick={() => navigate("/catalogue?fragment=2")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
