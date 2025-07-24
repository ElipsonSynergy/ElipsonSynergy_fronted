export interface TagType {
  id: string;
  name: string;
}

export interface AuthorType {
  id: string;
  name: string;
  bio?: string;
  avatarUrl?: string;
}

export interface PostType {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  author: AuthorType;
  tags: TagType[];
  views?: number;
}