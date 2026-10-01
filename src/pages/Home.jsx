import Post from "../components/Post";

function Home(){
     const posts = [
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
            }
        ];

        return (
            <section>
                <h1>Главная</h1>
                <div className="feed">
                    <h2>Лента</h2>
                </div>
                
                {posts.map((post) => (
                <Post
                    key={post.id}
                    author={post.author}
                    title={post.title}
                    text={post.text}
                    id={post.id}
                />
            ))}
            </section>
        )
}

export default Home;