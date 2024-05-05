import { DateTime } from "next-auth/providers/kakao";

// User model
export type UserModel = {
  id: number;
  username: string;
  email: string;
  createdAt: DateTime; // This might be a computed property, not directly stored in the database
};

// Post model (you can add more properties as needed)
export interface PostModel {
  id: number;
  title: string;
  keyword: string;
  des: string;
  slug: string;
  image: string;
  publish: number;
  content: string;
  user: UserModel;
  deletePost: (id: number) => void;
}
