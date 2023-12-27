export type TData = {
  id?: string;
  name: string | null;
  email: string | null;
};

export type TPost = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: string | null;
  createdAt: Date;
  author: TAuthor | null;
};

type TAuthor = {
  name: string | null;
};
