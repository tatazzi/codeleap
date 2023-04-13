export interface PostCardProps {
  postTitle: string;
  date: string;
  username: string;
  onClickEdit: () => void;
  onClickTrash: () => void;
  content: string;
}
