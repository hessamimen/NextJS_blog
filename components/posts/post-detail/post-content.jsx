import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with NextJs",
  image: "getting-started-nextjs.png",
  date: "2024-02-10",
  content: "# This is the first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}
export default PostContent;
