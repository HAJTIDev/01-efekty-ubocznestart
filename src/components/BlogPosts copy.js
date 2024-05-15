import { useState } from "react";
import classes from "./BlogPosts.module.css";
import { useEffect } from "react";
const DEFAULT_URL = "https://jsonplaceholder.typicode.com/posts";
async function fetchPosts(url) {
  const response = await fetch(url);

  const blogPosts = await response.json();
  return blogPosts;
}
export default function BlogPosts() {
  const [postsUrl, setPostsUrl] = useState(DEFAULT_URL);
  const [loadPosts, setLoadPosts] = useState([]);
  function adjustUrlHandler(event) {
    setPostsUrl(event.target.value);
  }
  useEffect(
    function () {
      fetchPosts(postsUrl).then((fetchedPosts) => setLoadPosts(fetchedPosts));
    },
    [postsUrl]
  );

  // fetchPosts().then((fetchedPosts)=>setLoadPosts(fetchedPosts));

  return (
    <>
      <input className={classes.input} type="text" onBlur={adjustUrlHandler} />
      <ul className={classes.posts}>
        {loadPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
