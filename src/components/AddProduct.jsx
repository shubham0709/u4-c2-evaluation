import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";

// const AddProduct = () => {
//   // TODO: Remove below const and instead import them from chakra
//   //const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Button my={4} data-cy="add-product-button">
//         click to add
//       </Button>
//       <Modal>
//         <ModalBody pb={6}>
//           <Input data-cy="add-product-title" placeholder="product title" />
//           <Select data-cy="add-product-category">
//             <option data-cy="add-product-category-shirt">shirt</option>
//             <option data-cy="add-product-category-pant">pant</option>
//             <option data-cy="add-product-category-jeans">jeans</option>
//           </Select>
//           <RadioGroup data-cy="add-product-gender">
//             <Radio data-cy="add-product-gender-male">male</Radio>
//             <Radio data-cy="add-product-gender-female">female</Radio>
//             <Radio data-cy="add-product-gender-unisex">unidex</Radio>
//           </RadioGroup>
//           <Input data-cy="add-product-price" />
//           <Button data-cy="add-product-submit-button">submit</Button>
//         </ModalBody>
//       </Modal>
//     </>
//   );
// };

// export default AddProduct;

function AddProduct({ products, setProducts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data, setData] = useState({
    title: "",
    category: "",
    gender: "",
    imageSrc: "",
    price: "",
  });

  const handleSubmit = () => {
    console.log("handle submit called");
    console.log(data);
    setProducts([...products, data]);

    axios
      .post("http://localhost:8080/products/", {
        ...data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Button onClick={onOpen} my={4} data-cy="add-product-button">
        click to add
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Input
              data-cy="add-product-title"
              placeholder="product title"
              onChange={(e) => {
                setData({
                  ...data,
                  title: e.target.value,
                });
              }}
            />
            <Select
              data-cy="add-product-category"
              onChange={(e) => {
                setData({
                  ...data,
                  category: e.target.value,
                });
              }}
            >
              <option name="shirt" data-cy="add-product-category-shirt">
                shirt
              </option>
              <option name="pant" data-cy="add-product-category-pant">
                pant
              </option>
              <option name="jeans" data-cy="add-product-category-jeans">
                jeans
              </option>
            </Select>
            <RadioGroup
              name="gender"
              data-cy="add-product-gender"
              onChange={(e) => {
                setData({
                  ...data,
                  gender: e,
                });
              }}
            >
              <Radio
                name="gender"
                value="male"
                data-cy="add-product-gender-male"
              >
                male
              </Radio>
              <Radio
                name="gender"
                value="female"
                data-cy="add-product-gender-female"
              >
                female
              </Radio>
              <Radio
                name="gender"
                value="unisex"
                data-cy="add-product-gender-unisex"
              >
                unisex
              </Radio>
            </RadioGroup>
            <Input
              data-cy="add-product-price"
              placeholder="enter price"
              onChange={(e) => {
                setData({
                  ...data,
                  price: e.target.value,
                });
              }}
            />
            <Input
              data-cy="add-product-price"
              placeholder="enter image url"
              onChange={(e) => {
                setData({
                  ...data,
                  imageSrc: e.target.value,
                });
              }}
            />
            <Button data-cy="add-product-submit-button" onClick={handleSubmit}>
              submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddProduct;
