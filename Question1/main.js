var postAPI = "http://localhost:3000/api/posts";
start();
function start() {
  const fetchBtn = document.querySelector(".fetch-data");
  const createBtn = document.querySelector(".create-post");
  fetchBtn.onclick = () => {
    fetchPosts(renderPosts);
  };
  createBtn.onclick = () => {
    createPost();
  };
}

function fetchPosts(callback) {
  fetch(postAPI)
    .then((response) => response.json())
    .then(callback);
}

function renderPosts(posts) {
  const postList = document.querySelector(".post-list");
  let html = "";
  let postArray = posts.map((post) => {
    return `
			<li class = 'post-item-${post.id}'>
				<span class = 'post-name'>Post ${post.id}:</span>
				<h2 class = 'post-title'>${post.title}</h2>
				<p class = 'post-body'>${post.body}</p>
			</li>
		`;
  });
  html += postArray.join("");
  postList.innerHTML = html;
}

function createPost() {
  let idPost = document.querySelector(".ID").value;
  let titlePost = document.querySelector(".title").value;
  let bodyPost = document.querySelector(".body").value;
  const Post = {
    id: idPost,
    title: titlePost,
    body: bodyPost,
  };
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Post),
  };

  fetch(postAPI, option)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const postList = document.querySelector(".post-list");
      let html = `
				<li class = 'post-item-${data.id}'>
					<span>Post ${data.id}:</span>
					<h2>${data.title}</h2>
					<p>${data.body}</p>
				</li>
			`;
      postList.innerHTML = html;
    });
}
