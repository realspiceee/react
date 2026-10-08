import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";

function Profile(){
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem("posts");
        if (savedPosts){
            return JSON.parse(savedPosts)
        }
        return [
            {
            id: 1,
            title: "text text text",
            text: "post post post",
            author: "Ksusha"
            },
        ];
    });

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    // Сохраняем посты после каждого изменения
    useEffect(() => {
        localStorage.setItem(
            "posts",
            JSON.stringify(posts)
        )
    }, [posts]);

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

    function deletePost(id){
        setPosts(
            posts.filter((post) => post.id !== id)
        );
    }

    // Функция для удаления всех постов
    function deleteAllPosts() {
        const confirmDelete = window.confirm("Вы уверены, что хотите удалить все свои посты?");
        if (confirmDelete) {
            setPosts([]);
        }
    }

    return (
        <section>
            <h1>Профиль</h1>
            <ProfileCard />
            <div className="feed">
                <h2>Мои посты</h2>

                <form className="post-form" onSubmit={addPost}>
                    <input type="text" placeholder="Заголовок" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <textarea placeholder="Текст поста" value={text} onChange={(event) => setText(event.target.value)}></textarea>
                    <button type="submit">Опубликовать</button>
                </form>


                {posts.length > 0 && (
                    <button onClick={deleteAllPosts} className="delete-all-btn">
                        Удалить все посты
                    </button>
                )}

                {posts.length > 0 ?
                (posts.map((post) => (
                    <Post
                    key={post.id}
                    author={post.author}
                    title={post.title}
                    text={post.text}
                    id={post.id}
                    onDelete={deletePost}
                    />
                ))) : (
                <p>
                    Опубликуйте свой первый пост
                </p>
            )}
            </div>
        </section>
    );
}

export default Profile;
