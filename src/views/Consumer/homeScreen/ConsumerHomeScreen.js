/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import axios from "axios";
import React, {useEffect, useContext, useState} from "react";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  VirtualizedList,
} from "react-native";
import {Searchbar, ActivityIndicator, Button, List, FAB} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AuthContext from "../../../context/auth-context";
import * as Colors from "../../../styles/abstracts/colors";
import AppHeader from "../../Common/AppHeader";
import {HOST_PORT} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GigRow from "./components/GigRow";
import GigGrid from "./components/GigGrid";
import Filters from "./components/Filters";

export const ConsumerHomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [emptyResult, setEmptyResult] = useState(false);
  const [refresh, setRefresh] = useState(1);
  const [gigs, setGigs] = useState([]);
  const [vegetableGigs, setVegetableGigs] = useState([]);
  const [fruitGigs, setFruitGigs] = useState([]);
  const [mylocation, setMyLocation] = useState({
    longitude: null,
    latitude: null,
  });
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [showFilters, setshowFilters] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");
  const [data, setData] = useState([]);
  const [viewDrop, setViewDrop] = useState(false);

  // Prams states
  const [category, setCategory] = useState("vegetable");
  const [gigType, setGigType] = useState("post");
  const [distance, setDistance] = useState("200000");
  const [lt, setLt] = useState("1000");
  const [gt, setGt] = useState("100");
  const [unit, setUnit] = useState("");
  const [deliverability, setDeliverability] = useState("");
  const [sortby, setSortBy] = useState("");
  const [home, setHome] = useState(false);

  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  // fetch arr from backend
  const [arrayHolder, setArrayHolder] = useState([]);

  useEffect(() => {
    const getGigTitles = async () => {
      let response;
      try {
        response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/gigs/titles`,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        // console.log(
        //   "titles",
        //   response.data.data.gigs.map(item => item.gigTitle),
        // );
        setArrayHolder(response.data.data.gigs.map(item => item.gigTitle));
      } catch (error) {
        console.error(error);
      }
    };
    getGigTitles();
  }, []);

  // const arr = [
  //   "vitae semper egestas, urna justo",
  //   "Nam consequat dolor",
  //   "Pellentesque ultricies dignissim",
  //   "amet ante. Vivamus non",
  //   "mollis vitae, posuere",
  //   "et, rutrum non, hendrerit",
  //   "ornare tortor at risus.",
  //   "Sed dictum. Proin eget",
  //   "Raddish",
  //   "tincidunt nibh. Phasellus nulla.",
  //   "magna. Nam ligula elit,",
  //   "pede. Suspendisse dui.",
  //   "sed leo. Cras vehicula aliquet",
  //   "auctor odio a purus. Duis",
  // ];

  // const arrayHolder = arr;

  const searchData = txt => {
    let newData;
    setHome(true);
    setViewDrop(true);
    if (txt !== "") {
      newData = arrayHolder.filter(item => {
        const itemdata = item.toUpperCase();
        const textdata = searchTxt.toUpperCase();
        return itemdata.indexOf(textdata) > -1;
      });
    }

    setSearchTxt(txt);
    setData(newData);
  };

  const handlePressItem = txt => {
    console.log("pressed:", txt);
    setViewDrop(false);
    setSearchTxt(txt);
    handleSearch(searchTxt);
  };

  const handleSortby = val => {
    setSortBy(val);
  };

  const handleDeliveryAbility = value => {
    setDeliverability(value);
  };

  const handleUnit = val => {
    setUnit(val);
  };

  const handleDistance = value => {
    setDistance(value);
  };

  const handleLt = val => {
    setLt(val);
  };

  const handleGt = val => {
    setGt(val);
  };

  const handleGigType = value => {
    setGigType(value);
  };

  const handleCategory = value => {
    setCategory(value);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const toggleSetshowFilters = () => {
    setshowFilters(!showFilters);
  };

  const applyFilters = () => {
    setSearchResult(false);
    setshowFilters(false);
    setRefresh(refresh + 1);
    setShowResult(true);
    setPage(1);
  };

  const clearFilters = () => {
    setSearchResult(false);
    setshowFilters(false);
    setShowResult(false);
    setSearchTxt(false);
    setRefresh(1);
    setPage(1);
    setSortBy("");
  };

  const closeSearch = () => {
    // setSearchTxt("");
    setHome(false);
    setSearchResult(false);
    setShowResult(false);
    setRefresh(1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      alert("You are already on first page");
    }
  };

  // search
  const handleSearch = txt => {
    // setSearchTxt(txt);
    setShowResult(true);
    setSearchResult(true);
    console.log("submit", txt);
    setRefresh(refresh + 1);
  };

  // get location
  useEffect(() => {
    getMyLocation();
  }, []);

  const getMyLocation = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("mylocation");
      if (jsonValue != null) {
        const obj = JSON.parse(jsonValue);
        setMyLocation(obj);
      } else {
        console.log("app loction null");
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Get mixed gigs
  useEffect(() => {
    getGigs();
  }, [limit, page, refresh]);

  const getGigs = async () => {
    setLoading(true);
    setEmptyResult(false);

    let response;
    try {
      if (showResult) {
        if (searchResult) {
          response = await axios({
            method: "get",
            url: `${HOST_PORT}/api/v1/gigs/all/6.900227917570787,79.85878306831803?distance=200000&searchTag=${searchTxt}`,
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
        } else {
          response = await axios({
            method: "get",
            url: `${HOST_PORT}/api/v1/gigs/all/6.900227917570787,79.85878306831803?limit=${limit}&distance=${distance}&page=${page}&gigCategory=${category}&gigType=${gigType}&unitPrice[gte]=${gt}&unitPrice[lte]=${lt}&unit=${unit}&deliveryAbility=${deliverability}&sort=${sortby}`,
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
        }
      } else {
        response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/gigs/all/${mylocation.latitude},${
            mylocation.longitude
          }?limit=${100}&distance=200000&page=${page}`,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
      }
      setGigs(response.data.data.gigs);
      setLoading(false);
    } catch (error) {
      if (error.response.data.status === "fail") {
        setEmptyResult(true);
        setLoading(false);
        console.log(error.response.data);
      }
    }
  };

  // get vege gigs
  useEffect(() => {
    const getVegeGigs = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/gigs/all/6.900227917570787,79.85878306831803?limit=${100}&distance=200000&gigCategory=vegetable`,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setVegetableGigs(response.data.data.gigs);
      } catch (error) {
        console.error(error);
      }
    };
    getVegeGigs();
  }, []);

  // get fruit gigs
  useEffect(() => {
    async function getFruitGigs() {
      try {
        const response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/gigs/all/6.900227917570787,79.85878306831803?limit=${100}&distance=200000&gigCategory=fruit`,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setFruitGigs(response.data.data.gigs);
      } catch (error) {
        console.error(error);
      }
    }
    getFruitGigs();
  }, []);

  return (
    <SafeAreaView>
      <AppHeader navigation={navigation} title="Gigs" />
      <View style={styles.searchbarContainer}>
        <Searchbar
          style={styles.searchbarLeft}
          onChangeText={txt => searchData(txt)}
          onSubmitEditing={e => handleSearch(e.nativeEvent.text)}
          placeholder="Search"
          value={searchTxt}
        />
        {home ? (
          <TouchableOpacity style={styles.searchbarRight} onPress={() => closeSearch()}>
            <MaterialCommunityIcons name="home" color="#fff" size={30} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.searchbarRight} onPress={() => toggleSetshowFilters()}>
            <MaterialCommunityIcons name="tune" color="#fff" size={30} />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView style={styles.scroll}>
        <Filters
          showFilters={showFilters}
          toggleModal={toggleSetshowFilters}
          showResult={showResult}
          applyFilters={applyFilters}
          clearFilters={clearFilters}
          category={category}
          handleCategory={handleCategory}
          gigType={gigType}
          handleGigType={handleGigType}
          gt={gt}
          handleGt={handleGt}
          lt={lt}
          handleLt={handleLt}
          distance={distance}
          handleDistance={handleDistance}
          unit={unit}
          handleUnit={handleUnit}
          deliverability={deliverability}
          handleDeliveryAbility={handleDeliveryAbility}
          sortby={sortby}
          handleSortby={handleSortby}
        />

        {data &&
          viewDrop &&
          data.map((item, index) => (
            <List.Item
              style={{zIndex: 0}}
              title={item}
              onPress={() => handlePressItem(item)}
              key={index}
            />
          ))}
        <View style={styles.container}>
          {!showResult && <GigRow gigs={fruitGigs} title="Fruits" />}

          {!showResult && <GigRow gigs={vegetableGigs} title="Vegetables" />}

          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator animating={true} />
            </View>
          )}

          {!loading && !emptyResult && (
            <GigGrid
              gigs={gigs}
              title={showResult ? "Result" : "You may like"}
              nextPage={nextPage}
              prevPage={prevPage}
              page={page}
              emptyResult={emptyResult}
            />
          )}

          {!loading && emptyResult && (
            <View>
              {page === 1 && (
                <View style={{alignItems: "center", justifyContent: "center", marginTop: 50}}>
                  <MaterialCommunityIcons name="magnify-remove-outline" size={50} color="#bbb" />
                  <Text>No results found !</Text>
                </View>
              )}
              {page !== 1 && (
                <View style={{alignItems: "center", justifyContent: "center", marginVertical: 50}}>
                  <MaterialCommunityIcons name="page-last" size={50} color="#bbb" />
                  <Text>{`You are on last page.\nNo more results found`}</Text>
                </View>
              )}
              {page !== 1 && (
                <View>
                  <Button disabled={page === 1} onPress={() => prevPage()}>
                    Back
                  </Button>
                  <Button disabled={emptyResult} onPress={() => nextPage()}>
                    Next
                  </Button>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchbarContainer: {
    padding: 5,
    flexDirection: "row",
    backgroundColor: Colors.primary.color,
  },
  searchbarLeft: {
    width: "80%",
  },
  searchbarRight: {
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: Colors.primary.color,
    width: "20%",
  },
  container: {
    flex: 1,
  },
  scroll: {
    // marginBottom: 140,
  },
  loading: {
    paddingBottom: 150,
    marginTop: 50,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 30,
    top: 50,
  },
});
