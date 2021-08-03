/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
import React from "react";
import {Image, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
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

export const GigScreen = ({route, navigation}) => {
  // Axios get
  // api/gigInfo/id:x
  const gigInfo = {
    gigTitle: route.params.gigTitle,
    priceTag: route.params.priceTag,
    expireDate: route.params.expireDate,
    growerName: route.params.growerName,
    imgUrl: route.params.imgUrl,
    id: route.params.id,
  };

  // Destructure gig info
  const {gigTitle, priceTag, expireDate, growerName, imgUrl, id} = gigInfo;

  // Dialog box popup
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <SafeAreaView>
      <AppHeader
        navigation={navigation}
        title={gigTitle}
        subtitle={`${priceTag} from ${growerName}`}
        showBackButton={true}
      />
      <ScrollView>
        <Image source={{uri: imgUrl}} style={styles.gigImg} />
        <View style={styles.container}>
          <GigTitle {...{priceTag, gigTitle, expireDate}} />

          <GigLocation
            distance="1.3 Km"
            address="No. 33/2, Siebel Avnue, Kirulapone"
            willSellerDeliver={true}
          />

          <QtyPrice />

          <HorizontalRule />

          <SellerInfo />

          <CategoryInfo />

          <GigDesc />

          <HorizontalRule />

          <BigButton text="Add to cart" icon="cart-plus" type="secondary" onPress={showDialog} />
          <BigButton text="Place Order" icon="shopping-outline" />

          <AddToCartDialog
            gig={{gigTitle, priceTag, expireDate, growerName, imgUrl, id}}
            visible={visible}
            hideDialog={hideDialog}
            showDialog={showDialog}
          />
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
