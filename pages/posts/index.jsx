import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR ",
    date: "2024-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJs II",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR ",
    date: "2024-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJs III",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR ",
    date: "2024-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJs IV",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR ",
    date: "2024-02-10",
  },
];

function AllPostsPage() {
  return (
    <div>
      <AllPosts posts={DUMMY_POSTS} />
    </div>
  );
}
export default AllPostsPage;
