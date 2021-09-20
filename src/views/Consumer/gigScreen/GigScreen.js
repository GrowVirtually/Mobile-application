/* eslint-disable react-native/no-raw-text */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
import React, {useState, useEffect, useContext} from "react";
import {Image, Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import {Button} from "react-native-paper";
import AddToCartDialog from "../gigScreen/components/AddToCartDialog";
import AppHeader from "../../Common/AppHeader";
import BigButton from "../../Common/BigButton";
import GigTitle from "./components/GigTitle";
import GigLocation from "./components/GigLocation";
import QtyPrice from "./components/QtyPrice";
import HorizontalRule from "../../Common/HorizontalRule";
import SellerInfo from "./components/SellerInfo";
import CategoryInfo from "./components/CategoryInfo";
import GigDesc from "./components/GigDesc";
import ImageSlider from "./components/ImageSlider";
import AuthContext from "../../../context/auth-context";
import axios from "axios";

export const GigScreen = ({route, navigation}) => {
  const [qty, setQty] = useState(1);
  const [gigData, setGigData] = useState({
    coordinates: {coordinates: [], crs: {}, type: ""},
    deliveryAbility: "",
    expireDate: "",
    gigCategory: "",
    gigDescription: "",
    gigTitle: "",
    gigType: "",
    id: "",
    minOrderAmount: "",
    sold: "",
    stock: "",
    unit: "",
    unitPrice: "",
    user: {
      customer: {
        grower: {
          growerType: "",
        },
      },
      fname: "",
      lname: "",
    },
    userid: "",
    images: [],
  });

  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  useEffect(() => {
    const getGigData = async () => {
      try {
        const config = {
          method: "get",
          url: `https://grovi-backend.herokuapp.com/api/v1/gigs/${id}`,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        };
        const response = await axios(config);
        console.log("gig", response.data.data);
        setGigData(response.data.data.gig);
      } catch (error) {
        console.error(error);
      }
    };
    getGigData();
  }, []);

  const handleQty = value => {
    setQty(value);
  };

  // Axios get
  // api/gigInfo/id:x
  const gigInfo = {
    gigTitle: route.params.gigTitle,
    priceTag: route.params.priceTag,
    expireDate: route.params.expireDate,
    growerName: route.params.growerName,
    imgUrl: route.params.imgUrl,
    gigImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    id: route.params.id,
    distance: "1.3 Km",
    address: "No. 33/2, Siebel Avnue, Kirulapone",
    geoData: {
      latitude: 6.911650087805625,
      longitude: 79.8589850944203,
    },
    willSellerDeliver: true,
    sellerInfo: "For sale by N. Sumanas",
    isVerified: true,
    isExpiredGig: false,
    ratingVal: 4,
    category: "Organic",
    type: "Vegetable",
    descripton:
      "Fresh yellow pumpkin harvested and available for sale. Can buy total lot or 5KG lot. Price can be slightly negotiable after confirmation. Call for more details.",
  };

  // Destructure gig info
  const {gigTitle, priceTag, expireDate, growerName, imgUrl, id, sellerInfo, coordinates} = gigInfo;

  // Dialog box popup
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <SafeAreaView>
      <AppHeader
        navigation={navigation}
        title={gigData.gigTitle}
        subtitle={`Rs ${gigData.unitPrice}/${gigData.unit} from ${gigData.user.fname} ${gigData.user.lname} `}
        showBackButton={true}
      />
      <ScrollView>
        {/* <ImageSlider gigImages={gigInfo.gigImages} /> */}
        {gigData.images.length === 0 ? (
          <Image style={styles.gigImg} source={require("../../../assets/gigPlaceholder.png")} />
        ) : (
          <Image
            style={styles.gigImg}
            source={{
              uri: gigData.images[0].imgLink,
            }}
          />
        )}
        <View style={styles.container}>
          <GigTitle
            expireDate={gigData.expireDate}
            gigTitle={gigData.gigTitle}
            priceTag={gigData.unitPrice}
            unit={gigData.unit}
            stock={gigData.stock}
          />

          <GigLocation
            address="No. 33/2, Siebel Avnue, Kirulapone"
            deliveryAbility={gigData.deliveryAbility}
            // geoData={{
            //   latitude: 6.911650087805625,
            //   longitude: 79.8589850944203,
            // }}
            geoData={{
              latitude: gigData.coordinates.coordinates[0],
              longitude: gigData.coordinates.coordinates[1],
            }}
          />

          <QtyPrice priceTag={gigData.unitPrice} qty={qty} handleQty={handleQty} />

          <HorizontalRule />

          <SellerInfo
            sellerInfo={`${gigData.user.fname} ${gigData.user.lname}`}
            isVerified={gigData.user.customer.grower.growerType === "premium"}
            ratingVal={4}
          />

          <CategoryInfo category={gigData.gigCategory} type={gigData.gigType} />

          <GigDesc descripton={gigData.gigDescription} />

          <HorizontalRule />

          {/* <BigButton text="Add to cart" icon="cart-plus" type="secondary" onPress={showDialog} /> */}
          {/* <BigButton
            text="Place Order"
            icon="shopping-outline"
            onPress={() => navigation.navigate("Payment")}
          /> */}
          <Button
            icon="shopping-outline"
            onPress={() => navigation.navigate("Payment", {qty, gigID: gigData.id})}
            mode="contained">
            Place Order
          </Button>

          {/* <AddToCartDialog
            gig={{gigTitle, priceTag, expireDate, growerName, imgUrl, id}}
            qty={qty}
            handleQty={handleQty}
            visible={visible}
            hideDialog={hideDialog}
            showDialog={showDialog}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gigImg: {
    height: 200,
  },
  container: {
    padding: 10,
    paddingBottom: 100,
    backgroundColor: "#fff",
  },
});
