/* eslint-disable prettier/prettier */
import React from "react";
import GigRow from "./GigRow";
import GigGrid from "./GigGrid";

export const ConsumerGigs = ({gigs, vegetableGigs, fruitGigs}) => {
  return (
    <>
      {/* Gigs Grid */}
      <GigRow gigs={fruitGigs} title="Fruits" />

      {/* Gigs Row  */}
      <GigRow gigs={vegetableGigs} title="Vegetables" />

      {/* Gigs Row  */}
      <GigGrid gigs={gigs} title="Vegetables" />
    </>
  );
};
