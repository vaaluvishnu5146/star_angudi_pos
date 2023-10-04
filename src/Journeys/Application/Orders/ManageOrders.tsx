import { SetStateAction, useState } from "react";
import ScrollableList from "../../../Components/ScrollableList/ScrollableList";
import CreateService from "../Catalogue/Components/ServiceFragment";
import CreateProduct from "../Catalogue/Components/ProductFragment";

const links = [
  { id: 1, label: "Categories", value: "categories" },
  { id: 2, label: "Products", value: "products" },
];

export default function ManageOrders() {
  const [linkSelected, setLinkSelected] = useState(1);

  function handleChange(id: SetStateAction<number>) {
    setLinkSelected(id);
  }

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-6">
          <ScrollableList
            data={links}
            selected={linkSelected}
            handleChange={handleChange}
          />
        </div>
        <div className="col-6"></div>
      </div>
      {/* HERE RENDER ALL THE COMPONENTS */}
      {linkSelected === 1 && <CreateService />}
      {linkSelected === 2 && <CreateProduct />}
    </div>
  );
}
