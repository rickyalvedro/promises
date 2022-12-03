const posts = [
  {
    title: "Post One",
    body: "This is Post One",
    createdAt: new Date().getTime(),
  },
  {
    title: "Post Two",
    body: "This is Post Two",
    createdAt: new Date().getTime(),
  },
  {
    title: "Post Three",
    body: "This is Post Three",
    createdAt: new Date().getTime(),
  },
];

const user = {
  username: "siraj",
  lastActivityTime: new Date().getTime(),
};

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((posts) => {
      output += `<li>${posts.title} - last updated ${
        Math.floor(new Date().getTime() - posts.createdAt) / 1000
      } Seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

const createPost = new Promise((resolve, reject) => {
  setTimeout(() => {
    // posts.push({ ...post, createdAt: new Date().getTime() });
    const error = false;
    // console.log("post created");
    if (!error) {
      resolve("All the posts created");
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
});

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        resolve(posts.pop());
      } else {
        reject("Array is empty now");
      }
    }, 1000);
  });
}

const updateLastActivityTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    user.lastActivityTime = new Date();
    resolve(user.lastActivityTime);
  }, 1000);
});

function userUpdatesPost() {
  Promise.all([createPost, updateLastActivityTime])
    .then((result) => {
      for (var i in result) {
        console.log(result[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .then(deletePost)
    .then(getPosts);
}

userUpdatesPost();
