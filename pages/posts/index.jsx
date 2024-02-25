import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="Alist of all programming-related posts."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
