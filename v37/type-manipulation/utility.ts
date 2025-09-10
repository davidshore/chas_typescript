//Utility types = Konverterare inbyggda i Typescript.

// Partial

interface User {
  id: number;
  name: string;
  email: string;
}

type UserPartial = Partial<User>;

function updateUser(user: User, updates: Partial<User>) {
  return { ...user, ...updates };
}

const u1: User = { id: 1, name: "Ada", email: "hej@google.se" };

const toUpdate = { name: "Grace" };

console.log(updateUser(u1, toUpdate));

// Pick och Omit

interface Article {
  id: string;
  title: string;
  body: string;
  author: string;
}

type ArticlePreview = Pick<Article, "id" | "title">;
type ArticleWithoutBody = Omit<Article, "body">;
