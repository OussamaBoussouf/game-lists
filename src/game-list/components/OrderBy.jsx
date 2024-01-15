import React from "react";
import { Select } from "@chakra-ui/react";

const OrderBy = () => {
  return (
    <Select
      display="inline-block"
      maxW="max-content"
      backgroundColor="#eaeaea"
      size="md"
    >
      <option defaultValue="Relevance">Relevance</option>
      <option defaultValue="Date added">Date added</option>
      <option defaultValue="Name">Name</option>
      <option defaultValue="Release date">Release date</option>
      <option defaultValue="Popularity">Popularity</option>
      <option defaultValue="Average rating">Average rating</option>
    </Select>
  );
};

export default OrderBy;
