import PostHeader from "./post-header";
import Markdown from "react-markdown";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with NextJs",
  image: "getting-started-nextjs.png",
  date: "2024-02-10",
  content: "# This is the first post",
};

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown>{post.content}</Markdown>
    </article>
  );
}
export default PostContent;
