import {ReactNode} from 'react';

export interface CreatePostProps {
  onPress: () => void;
  children: ReactNode;
  bgColor: string;
}
