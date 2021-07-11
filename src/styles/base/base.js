import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

export const container = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  // borderColor: '#fff',
};

export const logoLarge = {
  width: height_logo,
  height: height_logo,
};
