import {EditItemRequest, PostData} from '../../../pages/Home/types';

export interface EditModalProps {
  onEditPress: (item: EditItemRequest) => void;
  onCancelPress: () => void;
  post: PostData | null;
}
