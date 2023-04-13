import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: theme.colors.white,
    padding: 16,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalCloseButton: {
    backgroundColor: theme.colors.white,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 16,
  },
  modalCloseButtonText: {
    color: theme.colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalDeleteContent: {flexDirection: 'row-reverse'},
});
