import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack, Heading, Tag, TagLabel } from "@chakra-ui/react";
const Product = ({ products }) => {
  // TODO: Remove below const and instead import them from chakra

  useEffect(() => {
    console.log(products, "from mapping");
  }, [products]);

  return (
    <>
      {products.map((x) => (
        <Stack data-cy="product" key={x.id}>
          <Image data-cy="product-image" src={x.imageSrc} />
          <Text data-cy="product-category">{x.category}</Text>
          <Tag>
            <TagLabel data-cy="product-gender">{x.gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{x.title}</Heading>
          <Box data-cy="product-price">{x.price}</Box>
        </Stack>
      ))}
    </>
  );
};

export default Product;
