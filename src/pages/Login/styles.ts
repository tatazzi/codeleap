import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  box: {
    width: '100%',
    padding: 24,
    borderWidth: 1,
    borderColor: theme.colors.grey[100],
    backgroundColor: theme.colors.white,
    borderRadius: 8,
  },
  title: {fontWeight: '700', fontSize: 18, marginBottom: 24},
  buttonContainer: {
    marginTop: 16,
    alignItems: 'flex-end',
  },
});
