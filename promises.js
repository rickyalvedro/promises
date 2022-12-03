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
];
//let intervalId = 0;

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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error : Something went wrong");
      }
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const lastElement = posts.pop();
        resolve(lastElement);
      } else {
        reject("Array is empty now");
      }
    }, 1000);
  });
}

// const user = {
//   username: 'siraj',
//   lastActivityTime: '3rd of Dec'
// }

// function updateLastActivityTime(){
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         user.lastActivityTime = new Date().getTime();
//         resolve(user.lastActivityTime);
//       }, 1000);
//   })
// }

createPost({
  title: "Post Three",
  body: "This is Post Three",
  createdAt: new Date().getTime(),
})
  .then(() => {
    getPosts();
    deletePost().then((deletedElement) => {
      console.log(deletedElement);
      getPosts();
      deletePost().then(() => {
        getPosts();
        deletePost().then(() => {
          getPosts();
          deletePost()
            .then(() => {})
            .catch((err) => console.log("Inside catch block", err));
        });
      });
    });
  })
  .catch((err) => console.log(err));
