import { StyleSheet } from 'react-native';
import {primaryTextColor, linkColor} from '../../assets/css/colors';
import {titleText} from '../../assets/css/texts';

const globalStyles = StyleSheet.create({
  textTitle: {
    fontSize: titleText,
    fontWeight: 'bold',
    color: primaryTextColor,
  },
  viewMore: {
    color: linkColor
  }
});

export default globalStyles;