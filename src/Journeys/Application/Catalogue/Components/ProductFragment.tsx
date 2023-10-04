import { useState, useEffect } from "react";
import BasicTable from "../../../../Components/Table/BasicTable";
import CreateCategory from "../../../../Components/Modals/CreateCategory";
import CreateProductModal from "../../../../Components/Modals/CreateProduct";
import ButtonC from "../../../../Elements/Buttons/Button";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../../../Elements/SearchInput/SearchInput";
import ProductCard from "../../../../Components/ProductCard/FoodCard";

const headings = ["Id", "Name", "Created Date", "Updated Date", "Options"];
const options = [
  {
    id: 1,
    label: "Edit",
    callback: (id: Number, type: String) => {
      console.log(id, type);
    },
  },
  {
    id: 2,
    label: "Delete",
    callback: (id: Number, type: String) => {
      console.log(id, type);
    },
  },
];

export default function ProductFragment() {
  const navigate = useNavigate();
  const [categoryModal, setCategoryModal] = useState(false);
  const [createProduct, setCreateProduct] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <h1 className="mb-3">Create/Manage Products</h1>
      <div className="row mb-5">
        <div className="col-10">
          <SearchInput />
        </div>
        <div className="col-2">
          <ButtonC
            overrides={{
              width: "100%",
              height: "100%",
            }}
            label="Create Product"
            onClick={() => navigate("/catalogue/createProduct")}
          />
        </div>
      </div>
      <div className="row">
        <h3 className="mb-3">All Products</h3>
        <div className="row">
          <ProductCard
            isEdit={true}
            handleEdit={() => setCreateProduct(true)}
            data={{}}
          />
        </div>
      </div>
    </>
  );
}
