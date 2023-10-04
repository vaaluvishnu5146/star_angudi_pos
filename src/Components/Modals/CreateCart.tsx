import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import TextInput from "../../Elements/TextInput/TextInput";
import Radio from "../../Elements/Radio/Radio";
import ButtonC from "../../Elements/Buttons/Button";
import { orderType } from "../../Constants/options";

export default function CreateCart({
  isOpen = false,
  toggle = () => {},
  title = "",
  onSubmit = () => {},
}) {
  return (
    <Modal isOpen={isOpen} centered toggle={toggle}>
      <ModalHeader>
        <h3>{title}</h3>
      </ModalHeader>
      <ModalBody>
        <TextInput
          id="customerName"
          name="customerName"
          type="text"
          onChange={() => {}}
          placeholder="Enter Customer Name"
          label="Customer Name"
          value=""
        />
        <Radio label="Choose Order Type" name="cartType" options={orderType} />
        <ButtonC
          label="Create Cart"
          onClick={onSubmit}
          overrides={{
            width: "100%",
          }}
        />
      </ModalBody>
    </Modal>
  );
}
