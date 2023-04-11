import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  input: {
    height: 32,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: theme.colors.grey[100],
    marginBottom: 18,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
  },
});
