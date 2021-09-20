import React from "react";
import GigRow from "./GigRow";
import GigGrid from "./GigGrid";

export const GrowerGigs = ({gigs, vegetableGigs, fruitGigs, nextPage, prevPage}) => {
  return (
    <>
      {/* Gigs Row  */}
      <GigGrid gigs={gigs} title="Mixed" nextPage={nextPage} prevPage={prevPage} />
    </>
  );
};
