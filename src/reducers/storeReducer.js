export const storeState = {
  usertype: "grower",
  firstname: "ammo",
  lastname: "bbbo",
  userEmail: "sam@g.com",
};
export const storeReducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_USER_TYPE_TO_CONSUMER":
      return {...prevState, usertype: "consumer"};
    case "CHANGE_USER_TYPE_TO_GROWER":
      return {...prevState, usertype: "grower"};
    case "TOGGLE_USER_TYPE": {
      if (prevState.usertype === "consumer") {
        return {...prevState, usertype: "grower"};
      }
      return {...prevState, usertype: "consumer"};
    }
    case "SET_USER":
      return {
        ...prevState,
        usertype: action.usertype,
        firstname: action.firstname,
        lastname: action.lastname,
        userEmail: action.userEmail,
      };
    case "SET_USER_LOCATION": {
      return {...prevState, userLocation: action.userLocation};
    }
    case "SET_STATE": {
      return {
        ...action.state,
      };
    }
  }
};
