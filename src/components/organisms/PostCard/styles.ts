import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  container: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: theme.colors.grey[100],
    borderRadius: 8,
  },
  postHeader: {
    backgroundColor: theme.colors.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 20,
    borderTopStartRadius: 8,
    borderTopRightRadius: 8,
  },
  postTitle: {
    textAlign: 'center',

    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  buttons: {flexDirection: 'row'},
  trash: {
    marginRight: 12,
  },
  nameAndDate: {
    marginVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {color: theme.colors.grey[100], fontSize: 14, fontWeight: '700'},
  date: {
    color: theme.colors.grey[100],
    fontSize: 14,
    fontWeight: '400',
  },
  content: {padding: 20},
});
