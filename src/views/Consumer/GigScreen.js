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
import * as Colors from "../../styles/abstracts/colors";
import * as Btn from "../../styles/base/button";
import {ConsumerHeader} from "../Consumer/Components/ConsumerHeader";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import NumericInput from "react-native-numeric-input";
import {AddToCartDialog} from "./Components/AddToCartDialog";

export const GigScreen = ({route, navigation}) => {
  const {gigTitle, priceTag, expireDate, growerName, imgUrl, id} = route.params;

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.primary.color} />
      <ConsumerHeader
        navigation={navigation}
        title={gigTitle}
        subtitle={`${priceTag} from ${growerName}`}
      />
      <ScrollView>
        <Image source={{uri: imgUrl}} style={styles.gigImg} />
        <View style={styles.container}>
          <View style={styles.gigTitlesHeart}>
            <View style={styles.gigTitlesLeft}>
              <Text style={styles.gigTitle}>{gigTitle}</Text>
              <Text style={styles.gigPrice}>{priceTag}</Text>
            </View>
            <TouchableOpacity>
              <MaterialIcon name="heart" size={25} color={Colors.secondary.color} />
            </TouchableOpacity>
          </View>
          <View style={styles.secondRow}>
            <Text style={styles.availableTxt}>34KG Available</Text>
            <MaterialIcon style={styles.expireTxt} size={8} name="checkbox-blank-circle" />
            <Text style={styles.expireTxt}>
              Expires in {expireDate + " " + (expireDate > 1 ? "days" : "day")}
            </Text>
          </View>
          <View style={styles.addressRow}>
            <MaterialIcon color={Colors.fontColor.color} size={25} name="map-marker" />
            <View style={styles.addresRight}>
              <View style={styles.locationRow}>
                <Text style={{fontWeight: "bold"}}>1.4 Km</Text>
                <TouchableOpacity>
                  <Text style={styles.viewOnMap}>View on map</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.address}>No. 33/2, Siebel Avnue, Kirulapone</Text>
                <Text style={styles.deliverMethod}>Seller will deliver to you</Text>
              </View>
            </View>
          </View>
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
              <MaterialIcon name="star" size={18} color={Colors.secondary.color} />
              <MaterialIcon name="star" size={18} color={Colors.secondary.color} />
              <MaterialIcon name="star" size={18} color={Colors.secondary.color} />
              <MaterialIcon name="star-outline" size={18} color={Colors.secondary.color} />
              <MaterialIcon name="star-outline" size={18} color={Colors.secondary.color} />
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
          <TouchableOpacity
            onPress={showDialog}
            style={[styles.button, {backgroundColor: Colors.secondary.color}]}>
            <MaterialIcon name="cart-plus" size={22} color="#fff" style={{marginRight: 5}} />
            <Text style={Btn.btnText}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcon name="shopping-outline" size={22} color="#fff" style={{marginRight: 5}} />
            <Text style={Btn.btnText}>Place order</Text>
          </TouchableOpacity>
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
  gigTitle: {
    fontSize: 22,
    color: Colors.fontColor.color,
  },
  gigPrice: {
    fontSize: 14,
    color: Colors.fontColor.color,
  },
  container: {
    padding: 10,
    paddingBottom: 100,
    backgroundColor: "#fff",
  },
  gigTitlesHeart: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  availableTxt: {
    fontSize: 14,
    color: Colors.primary.color,
    fontWeight: "bold",
  },
  secondRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  expireTxt: {
    marginLeft: 10,
    color: Colors.errorColor.color,
    fontWeight: "bold",
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  addresRight: {
    marginLeft: 10,
  },
  locationRow: {
    flexDirection: "row",
  },
  viewOnMap: {
    marginLeft: 15,
    marginBottom: 5,
    color: Colors.secondary.color,
    textDecorationLine: "underline",
  },
  address: {
    color: Colors.fontColor.color,
    marginBottom: 5,
  },
  deliverMethod: {
    fontWeight: "bold",
    color: Colors.fontColor.color,
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
  ratings: {
    flexDirection: "row",
  },
  detailRow: {
    marginTop: 13,
    flexDirection: "row",
  },
  detailTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    ...Btn.button,
    width: "100%",
    marginTop: 10,
  },
});
