//temporary data

const users = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Chris" },
];

const posts = [
  { id: 1, title: "Post 1", body: "lorem", userId: 1 },
  { id: 2, title: "Post 2", body: "lorem", userId: 1 },
  { id: 3, title: "Post 3", body: "lorem", userId: 2 },
  { id: 4, title: "Post 4", body: "lorem", userId: 2 },
];

export async function getPosts() {
  return posts;
}

export async function getPost(id) {
  return posts.find((post) => post.id === Number(id));
}

export async function getUser(id) {
  return users.find((user) => user.id === Number(id));
}