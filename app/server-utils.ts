export const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};
export const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

export const getPostCommentsData = async () => {
  const res = await fetch(" https://jsonplaceholder.typicode.com/comments");
  const postComments = await res.json();
  return postComments;
};
