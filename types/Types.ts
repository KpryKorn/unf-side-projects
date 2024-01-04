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

export type TUser = {
  id: string;
  name: string | null;
  bio: string | null;
  age: number | null;
  role: string;
  posts?: TPost[];
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
};
