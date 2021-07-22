// names
export const validateName = (name, state, setState) => {
  const letterRegex = /^[a-zA-Z]+$/;
  if (!name || letterRegex.test(name)) {
    setState(name);
  }
};

// emails
export const validateEmail = (email, errorState, setErrorState) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email || emailRegex.test(email)) {
    // setError(validationErrors.filter(error => error !== "email"));
    setErrorState(errorState.filter(error => error !== "Invalid email"));
  } else {
    setErrorState([...errorState, "Invalid email"]);
  }
};

// passwords
export const pwErrorMessages = {
  // all kinds of pw error messages
  lessCharacters: "Password must contain at least 8 characters",
  pwNotMatch: "Passwords does not match",
};

export const validatePassword = (pwd, errorState, setErrorState) => {
  // predicates
  pwd.length < 8
    ? pwErrorAggregator(pwErrorMessages.lessCharacters, errorState, setErrorState)
    : pwErrorCuttingUp(pwErrorMessages.lessCharacters, errorState, setErrorState);
};

const pwErrorAggregator = (errorMessage, errorState, setErrorState) => {
  setErrorState([...errorState, errorMessage]);
};

const pwErrorCuttingUp = (errorMessage, errorState, setErrorState) => {
  setErrorState(errorState.filter(pwe => pwe !== errorMessage));
};
