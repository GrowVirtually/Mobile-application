/* eslint-disable prettier/prettier */
import React from "react";
import GigRow from "./GigRow";
import GigGrid from "./GigGrid";

export const ConsumerGigs = ({gigs}) => {
  return (
    <>
      {/* Gigs Grid */}
      <GigRow gigs={gigs} title="From top sellers" />

      {/* Gigs Row  */}
      <GigRow gigs={gigs} title="Fruits" />

      {/* Gigs Row  */}
      <GigGrid gigs={gigs} title="Vegetables" />
    </>
  );
};
