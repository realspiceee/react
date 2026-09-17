import { useState } from "react";
import Post from "./Post";

function ProfileCard() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "text text text",
            text: "post post post",
            author: "Ksusha"
        },
        {
            id: 2,
            title: "text 2 text 2 text 2",
            text: "post post post",
            author: "Max"
        },
        {
            id: 3,
            title: "text 3 text 3 text 3",
            text: "post post post",
            author: "Anton"
        },
        {
            id: 4,
            title: "text 3 text 3 text 3",
            text: "post post post",
            author: "Anton"
        },
        {
            id: 5,
            title: "text 3 text 3 text 3",
            text: "post post post",
            author: "Anton"
        },
        {
            id: 6,
            title: "text 3 text 3 text 3",
            text: "post post post",
            author: "Anton"
        },
        {
            id: 7,
            title: "text 3 text 3 text 3",
            text: "post post post",
            author: "Anton"
        },
        {
            id: 8,
            title: "text 3 text 3 text 3",
            text: "post post post",
            author: "Anton"
        },

    ]);

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function addPost(event) {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "Ksusha"
        };

        setPosts([...posts, newPost]);

        setTitle("");
        setText("");
    }

    return (
        <section className="profile-card">
            <div className="profile">
                <div className="avatar">avatar</div>
                <div className="profile-info">
                    <h2>Name</h2>
                    <p>@nickname</p>
                </div>
            </div>

            <form className="post-form" onSubmit={addPost}>
                <input type="text" placeholder="Заголовок" value={title} onChange={(event) => setTitle(event.target.value)} />
                <textarea placeholder="Текст поста" value={text} onChange={(event) => setText(event.target.value)}></textarea>
                <button type="submit">Опубликовть</button>
            </form>

            {posts.map((post) => (
                <Post
                    key={post.id}
                    author={post.author}
                    title={post.title}
                    text={post.text}
                />
            ))}
        </section>
    )
}

export default ProfileCard;