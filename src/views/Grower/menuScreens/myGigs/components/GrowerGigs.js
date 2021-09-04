/* eslint-disable prettier/prettier */
import React from "react";
import GigRow from "./GigRow";
import GigGrid from "./GigGrid";

const gigs = [
  {
    id: 1,
    gigTitle: "Pumpking / Organic",
    priceTag: 170.43,
    expireDate: 1,
    growerName: "Dingiri Banda",
    imgUrl: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    gigTitle: "Carrot / Organic",
    priceTag: 180,
    expireDate: 6,
    growerName: "N. Sumana",
    imgUrl: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    gigTitle: "Brinjol / Organic",
    priceTag: 70,
    expireDate: 4,
    growerName: "Sotthi Upali",
    imgUrl: "https://picsum.photos/200/300?random=3",
  },
  {
    id: 4,
    gigTitle: "Cucumber ",
    priceTag: 170.43,
    expireDate: 2,
    growerName: "Gotabaya Rajapasksha",
    imgUrl: "https://picsum.photos/200/300?random=4",
  },
  {
    id: 5,
    gigTitle: "Pumpking / Organic",
    priceTag: 170,
    expireDate: 4,
    growerName: "Amarabandu Rupasinghe",
    imgUrl: "https://picsum.photos/200/300?random=5",
  },
  {
    id: 6,
    gigTitle: "Carrot ",
    priceTag: 170.43,
    expireDate: 2,
    growerName: "N. Sumana",
    imgUrl: "https://picsum.photos/200/300?random=6",
  },
  {
    id: 7,
    gigTitle: "Pumpking",
    priceTag: 170.43,
    expireDate: 2,
    growerName: "A. Dodampe",
    imgUrl: "https://picsum.photos/200/300?random=1",
  },
];

export const GrowerGigs = () => {
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
