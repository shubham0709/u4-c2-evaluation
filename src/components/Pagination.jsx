import React from "react";
import { Select, Button, ButtonGroup } from "@chakra-ui/react";

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">first</Button>
      <Button data-cy="pagination-previous-button">previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">next</Button>
      <Button data-cy="pagination-last-button">last page</Button>
    </ButtonGroup>
  );
};

export default Pagination;
