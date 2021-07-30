/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
import React from "react";
import {Image, View, StyleSheet, Text, SafeAreaView, ScrollView} from "react-native";
import * as Colors from "../../../styles/abstracts/colors";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AddToCartDialog from "../gigScreen/components/AddToCartDialog";
import AppHeader from "../../Common/AppHeader";
import BigButton from "../../Common/BigButton";
import Ratings from "../../Common/Ratings";
import GigTitle from "./components/GigTitle";
import GigLocation from "./components/GigLocation";
import QtyPrice from "./components/QtyPrice";
import HorizontalRule from "../../Common/HorizontalRule";
import SellerInfo from "./components/SellerInfo";

export const GigScreen = ({route, navigation}) => {
  const {gigTitle, priceTag, expireDate, growerName, imgUrl, id} = route.params;
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

          <GigLocation />

          <QtyPrice />

          <HorizontalRule />

          <SellerInfo />

          <View style={styles.detailRow}>
            <MaterialIcon name="tag-outline" size={22} color={Colors.fontColor.color} />
            <View style={styles.sellerDetail}>
              <View style={{flexDirection: "row"}}>
                <Text style={styles.detailTitle}>Category: </Text>
                <Text style={styles.descripton}>Organic</Text>
              </View>
            </View>
            <View style={{flexDirection: "row"}}>
              <Text style={styles.detailTitle}>Type: </Text>
              <Text style={styles.descripton}>Vegetable</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <MaterialIcon name="information-outline" size={22} color={Colors.fontColor.color} />
            <View style={styles.sellerDetail}>
              <Text style={styles.detailTitle}>Descripton</Text>
              <Text style={styles.descripton}>
                Fresh yellow pumpkin harvested and available for sale. Can buy total lot or 5KG lot.
                Price can be slightly negotiable after confirmation. Call for more details.
              </Text>
            </View>
          </View>

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
  sellerDetail: {
    marginLeft: 20,
    paddingRight: 30,
    color: Colors.fontColor.color,
  },
  detailRow: {
    marginTop: 13,
    flexDirection: "row",
  },
  detailTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
