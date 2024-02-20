import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-utils";

function HomePage(props) {
  const { posts } = props;

  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
export default HomePage;

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
