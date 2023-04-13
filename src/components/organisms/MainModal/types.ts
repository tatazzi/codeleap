import {ReactNode} from 'react';

export interface MainModalProps {
  visible: boolean;
  onClose: () => void;

  children?: ReactNode;
}
