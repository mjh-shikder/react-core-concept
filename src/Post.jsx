import { use } from "react"
import Post from "./singlePost";

export default function Posts({ postPromise }) {
    
    const posts = use(postPromise)
    console.log(postPromise);
    
    

    return (
        <div className="card">
            <h2>All Post are here: {posts.length} </h2>
            {
                posts.map(post => <Post key={post.id} post ={post}></Post>)
            }
        </div>
    )
}