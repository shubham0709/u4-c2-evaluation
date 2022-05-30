import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import { Flex, Spacer } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Product from "./Product";

const Products = ({
  products,
  setProducts,
  page,
  setPage,
  limit,
  setLimit,
}) => {
  // TODO: Remove below const and instead import them from chakra
  return (
    <Flex>
      <AddProduct products={products} setProducts={setProducts}></AddProduct>
      <Grid>
        <Product products={products}></Product>
      </Grid>
      <Pagination></Pagination>
    </Flex>
  );
};

export default Products;
