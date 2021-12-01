const posts = [
  {
    postId: 1,
    postName: "Homework",
    postDate: "22.12.2021",
  },
  {
    postId: 2,
    postName: "To Do",
    postDate: "16.08.2020",
  },
  {
    postId: 3,
    postName: "Travel",
    postDate: "04.02.2021",
  },
];

const listPosts = () => {
  posts.map((elemet) => {
    console.log(elemet.postName);
  });
};

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (newPost) {
      posts.push(newPost);
      resolve("Post başarılı bir şekilde eklendi.");
    } else {
      reject("Post ekleme işlemi gerçekleştirilemedi.");
    }
  });
};

async function showPosts() {
  try {
    await addPost({
      postId: 4,
      postName: "New Post",
      postDate: "09.05.2021",
    });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}
showPosts();
