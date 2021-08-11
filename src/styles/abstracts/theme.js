import {DefaultTheme} from "react-native-paper";
import * as Colors from "./colors";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary.color,
    accent: Colors.secondary.color,
  },
};

export default theme;
