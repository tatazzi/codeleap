import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    padding: 18,
    borderRadius: 8,
    borderColor: theme.colors.grey[100],
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 24,
  },
  buttonContainer: {marginTop: 16, alignItems: 'flex-end'},
});
