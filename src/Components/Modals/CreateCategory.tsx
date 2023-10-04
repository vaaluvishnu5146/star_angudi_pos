import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import TextInput from "../../Elements/TextInput/TextInput";
import ButtonC from "../../Elements/Buttons/Button";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import useCreateCategory from "../../Hooks/Categories/useCreateCategory";
import { CategoryT } from "../../Interfaces/Components";

export default function CreateCategory({ title = "" }) {
  const [categoryModal, setCategoryModal] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    description: "",
    image: "",
    isActive: false,
  });
  const [createCategory, error, success, fetching] = useCreateCategory();

  function handleCreateService(e: React.MouseEvent<HTMLElement>) {
    if (e && category.name && category.description && category.image) {
      createCategory(category);
      setCategory({ name: "", description: "", image: "", isActive: false });
      setCategoryModal(false);
    } else {
      alert("Data is in accurate");
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const categoryCopy: CategoryT = {
      ...category,
    };
    if (e.target.type === "checkbox") {
      // @ts-ignore
      categoryCopy[e.target.name] = e.target.checked;
    } else {
      // @ts-ignore
      categoryCopy[e.target.id] = e.target.value;
    }
    setCategory(categoryCopy);
  }

  return (
    <>
      <ButtonC
        label={title}
        onClick={() => setCategoryModal(true)}
        overrides={{
          width: "100%",
        }}
      />
      <Modal
        isOpen={categoryModal}
        centered
        toggle={() => setCategoryModal(false)}
      >
        <ModalHeader>
          <h3>{title}</h3>
        </ModalHeader>
        <ModalBody>
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Enter Category Name"
            label="Category Name"
            value={category.name}
            onChange={handleInput}
          />
          <TextInput
            id="description"
            name="description"
            type="text"
            onChange={handleInput}
            placeholder="Enter Description Name"
            label="Description Name"
            value={category.description}
          />
          <TextInput
            id="image"
            name="image"
            type="text"
            onChange={handleInput}
            placeholder="Enter Service Image URL"
            label="Category Image"
            value={category.image}
          />
          <Checkbox
            options={[{ id: "active", name: "Active" }]}
            name="isActive"
            label="Is Active?"
            value={category.isActive}
            handleChange={handleInput}
          />
          <ButtonC
            label="Create Service"
            onClick={handleCreateService}
            overrides={{
              width: "100%",
            }}
            isLoading={fetching}
          />
        </ModalBody>
      </Modal>
    </>
  );
}
