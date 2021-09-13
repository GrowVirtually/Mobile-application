// import React from "react";
// import {
//   Text,
//   View,
//   StatusBar,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
// } from "react-native";

// export const GrowerMenu = ({navigation}) => {
//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           // Try setting `flexDirection` to `"row"`.
//           flexDirection: "column",
//         },
//       ]}>
//       <TouchableOpacity
//         style={styles.buttonContainer}
//         onPress={() => navigation.navigate("NewGig")}>
//         <Image
//           source={{uri: "https://image.flaticon.com/icons/png/512/862/862856.png"}}
//           style={styles.buttonImage}
//           resizeMode="contain"
//         />

//         <Text style={styles.buttonText}>New Gigssss</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonContainer}
//         onPress={() => navigation.navigate("MyGigs")}>
//         <Image
//           source={{uri: "https://image.flaticon.com/icons/png/512/3701/3701918.png"}}
//           style={styles.buttonImage}
//           resizeMode="contain"
//         />
//         <Text style={styles.buttonText}>My Gigs</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonContainer}
//         onPress={() => navigation.navigate("FindConsumer")}>
//         <Image
//           source={{uri: "https://image.flaticon.com/icons/png/512/1992/1992516.png"}}
//           style={styles.buttonImage}
//           resizeMode="contain"
//         />
//         <Text style={styles.buttonText}>Find Consumers</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonContainer}
//         onPress={() => navigation.navigate("Orders")}>
//         <Image
//           source={{uri: "https://image.flaticon.com/icons/png/512/3500/3500833.png"}}
//           style={styles.buttonImage}
//           resizeMode="contain"
//         />
//         <Text style={styles.buttonText}>Orders</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonContainer}
//         onPress={() => navigation.navigate("Earnings")}>
//         <Image
//           source={{uri: "https://image.flaticon.com/icons/png/512/3135/3135706.png"}}
//           style={styles.buttonImage}
//           resizeMode="contain"
//         />
//         <Text style={styles.buttonText}>Earnings</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonContainer}
//         onPress={() => navigation.navigate("Support")}>
//         <Image
//           source={{uri: "https://image.flaticon.com/icons/png/512/682/682055.png"}}
//           style={styles.buttonImage}
//           resizeMode="contain"
//         />
//         <Text style={styles.buttonText}>Support</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   buttonContainer: {
//     backgroundColor: "#F1F8E9",
//     borderWidth: 3,
//     borderColor: "#1B5E20",
//     flexDirection: "row",
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "flex-start",

//     margin: 10,
//     width: 375,
//     height: 90,
//   },
//   buttonText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#1B5E20",
//     marginLeft: 80,
//   },
//   buttonImage: {
//     width: 60,
//     height: 60,
//     marginLeft: 20,
//   },
// });

import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {TouchableRipple} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";

export const GrowerMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuWrapper}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("NewGig")}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Icon name="plus-circle" color={Colors.secondary.color} size={25} />
              <Icon name="barley" color={Colors.secondary.color} size={40} />
            </View>
            <Text style={styles.menuItemText}>New Gig</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="barley" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>My Gigs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("FindConsumer")}>
            <Icon name="account-search" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>Find Consumers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Orders")} style={styles.menuItem}>
            <Icon name="cart-arrow-down" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>My Orders</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Earnings")} style={styles.menuItem}>
            <Icon name="currency-usd" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Support")} style={styles.menuItem}>
            <Icon name="help-circle" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>Support</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  menuWrapper: {
    // margin: 20,
  },
  menuItem: {
    elevation: 2,
    padding: 10,
    backgroundColor: "#fff",
    width: 150,
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 5,
    // minHeight: 100,
  },
  menuItemText: {
    fontSize: 14,
    marginTop: 10,
    color: "#555",

    // fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
