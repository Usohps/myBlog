import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory();
    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div className="loadmsg">loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <div className="heading">
                        <h2> {blog.title}</h2>
                    </div>
                    <p className="blog_body">{blog.body}</p>
                    <p className="author">written by {blog.author}</p>
                    <div className="button_container">
                        <button onClick={handleClick}>DELETE</button>
                    </div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;