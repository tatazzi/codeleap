import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export default StyleSheet.create({
  container: {
    margin: 1,
    flex: 1,
  },
  itemSeparator: {height: 12},
  safeArea: {backgroundColor: theme.colors.blue},
  headerTitle: {
    margin: 18,
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  flatlist: {flexGrow: 1},
});
