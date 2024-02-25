import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-utils";

function PostDetailPage(props) {
  console.log();
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
}

export async function getStaticProps(context) {
  const postData = getPostData(context.params.slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));

  const paths = slugs.map((slug) => {
    return { params: { slug: slug } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
export default PostDetailPage;
