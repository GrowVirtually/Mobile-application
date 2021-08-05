export const initialLoginState = {
  isLoading: true,
  userToken: null,
};

export const loginReducer = (prevState, action) => {
  switch (action.type) {
    case "RETRIEVE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "LOGIN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
  }
};
