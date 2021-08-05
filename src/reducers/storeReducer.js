export const storeState = {username: "Amarabandu", usertype: "grower"};
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
  }
};
