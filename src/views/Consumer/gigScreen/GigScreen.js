/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
import React from "react";
import {
  StatusBar,
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Colors from "../../../styles/abstracts/colors";
import * as Btn from "../../../styles/base/button";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import NumericInput from "react-native-numeric-input";
import {AddToCartDialog} from "../Components/AddToCartDialog";
import {AppHeader} from "../../Common/AppHeader";
import BigButton from "../../Common/BigButton";
import Ratings from "../../Common/Ratings";
import GigTitle from "./components/GigTitle";
import GigLocation from "./components/GigLocation";

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

          <View style={styles.qtyRow}>
            <Text style={{marginRight: 10}}>Quantity (KG):</Text>
            <NumericInput
              rounded
              onChange={value => console.log(value)}
              minValue={0}
              rightButtonBackgroundColor={Colors.secondary.color}
              leftButtonBackgroundColor={Colors.secondary.color}
              iconStyle={{color: "#FFF"}}
              borderColor={Colors.secondary.color}
              totalHeight={35}
              totalWidth={90}
            />
            <Text style={{marginLeft: 15}}>Price (Rs): </Text>
            <Text style={{fontWeight: "bold"}}>6799.00</Text>
          </View>
          <View style={styles.hr} />
          <View style={styles.ratingRow}>
            <View style={{flexDirection: "row"}}>
              <MaterialIcon name="storefront-outline" size={22} color={Colors.fontColor.color} />
              <View style={styles.sellerDetail}>
                <Text>For sale by N. Sumana</Text>
                <View style={styles.verfiedSeller}>
                  <MaterialIcon name="star-circle" size={18} color={Colors.secondary.color} />
                  <Text style={styles.verfiedSellerTxt}>GroVi verified seller</Text>
                </View>
              </View>
            </View>
            <View style={styles.ratings}>
              <Ratings val={1} />
            </View>
          </View>

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

          <View style={styles.hr} />
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

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  hr: {
    borderBottomColor: Colors.tertiary.color,
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sellerDetail: {
    marginLeft: 20,
    paddingRight: 30,
    color: Colors.fontColor.color,
  },
  verfiedSeller: {
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
  },
  verfiedSellerTxt: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: "bold",
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
