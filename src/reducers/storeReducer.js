export const storeState = {
  usertype: "grower",
  firstname: "ammo",
  lastname: "bbbo",
  userEmail: "sam@g.com",
};
export const storeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER_TYPE_TO_CONSUMER":
      return {...state, usertype: "consumer"};
    case "CHANGE_USER_TYPE_TO_GROWER":
      return {...state, usertype: "grower"};
    case "TOGGLE_USER_TYPE": {
      if (state.usertype === "consumer") {
        return {...state, usertype: "grower"};
      }
      return {...state, usertype: "consumer"};
    }
    case "SET_USER":
      return {
        ...state,
        firstname: action.firstname,
        lastname: action.lastname,
        userEmail: action.userEmail,
      };
  }
};
