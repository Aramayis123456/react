import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    async function fetchPosts() {
        try{
            const response = await axios.get("http://localhost:4000/posts")
            const data = await response.data
            setPosts(data)
        }catch (e) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        fetchPosts()
    }, []);


    async function addPost(e) {
        e.preventDefault()
        try{

            const response = await axios.post("http://localhost:4000/posts", {
                title
            })
            setTitle('')
            fetchPosts()
            return response.data

        }catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div>

            <ul>
                {
                    posts.map((post) =>
                    <li key={post.id}>
                        {`${post.id}: ${post.title} `}
                    </li>)
                }
            </ul>
            <div>
                <input
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    type="text"
                    value={title}
                />
                <button onClick={addPost}>
                    Add Post
                </button>
            </div>
          </div>
    );
};

export default Home;