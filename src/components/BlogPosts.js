import { useEffect, useState } from "react";
import classes from "./BlogPosts.module.css";
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const BlogPosts = await response.json();
  return BlogPosts;
}
function BlogPosts() {
    const[loadedPosts, setLoadedPosts] = useState([]);
    useEffect(function(){
        fetchPosts().then((fetchedPosts)=> setLoadedPosts(fetchedPosts));
    });
    
    return (
        <>
        <ul className={classes.posts}>
            {loadedPosts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </>
    );
}
export default BlogPosts;