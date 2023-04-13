export interface HomeProps {}
export type PostData = {
  id: number;
  title: string;
  content: string;
  created_datetime: string;
  username: string;
};

export type EditItemRequest = {
  title?: string;
  content?: string;
};
