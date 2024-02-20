import fs from "fs";
import matter from "gray-matter";
import path from "path";
const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(fileName, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); //removes the file extension
  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData;
}
function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data > postB.data ? -1 : 1
  );

  return sortedPosts;
}
