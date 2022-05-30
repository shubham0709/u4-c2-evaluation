import React from "react";
import { Select, Button, ButtonGroup } from "@chakra-ui/react";

const Pagination = ({
  products,
  setProducts,
  page,
  setPage,
  limit,
  setLimit,
  endPoint,
  setEndPoint,
}) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <ButtonGroup>
      <Button
        data-cy="pagination-first-button"
        onClick={() => {
          setPage(1);
        }}
      >
        first
      </Button>
      <Button
        disabled={page * limit <= endPoint}
        data-cy="pagination-previous-button"
        onClick={() => {
          page > 1 ? setPage(page - 1) : setPage(1);
        }}
      >
        previous
      </Button>
      <Select
        data-cy="pagination-limit-select"
        onChange={(e) => {
          setLimit(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button
        disabled={page * limit >= endPoint}
        data-cy="pagination-next-button"
        onClick={() => {
          page * limit < endPoint ? setPage(page + 1) : setPage(page);
        }}
      >
        next
      </Button>
      <Button
        data-cy="pagination-last-button"
        onClick={() => {
          setPage(Math.floor(endPoint / limit));
        }}
      >
        last page
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
