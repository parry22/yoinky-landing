export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: number;
  author: string;
  image: string;
}

export const POSTS: Post[] = [
  {
    slug: "the-context-tax",
    title: "The Context Tax: Why You Spend More Time Explaining Than Actually Working",
    excerpt:
      "Every time you open a new AI conversation, you pay an invisible toll: re-explaining who you are, what you're building, and how you work. Here's why that matters, and what it would take to make it stop.",
    tag: "Productivity",
    date: "June 19, 2026",
    readTime: 7,
    author: "Parry",
    image: "/context.png",
  },
];
