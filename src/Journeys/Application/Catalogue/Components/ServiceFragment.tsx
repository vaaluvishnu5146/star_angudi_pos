import { useState, useEffect } from "react";
import BasicTable from "../../../../Components/Table/BasicTable";
import CreateCategory from "../../../../Components/Modals/CreateCategory";

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

export default function ServiceFragment() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setCategories(result.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="row mb-5">
        <div className="col-10">
          <h1>Create/Manage Categories</h1>
        </div>
        <div className="col-2">
          <CreateCategory title="Create Category" />
        </div>
      </div>
      <BasicTable headings={headings} options={options} data={categories} />
    </div>
  );
}
