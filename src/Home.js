import BlogList from "./Bloglist"
import useFetch from "./useFetch"
const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div className="loadmsg">Loading Please wait...</div>}
            {blogs && <BlogList blogs={blogs} title="Welcome To Cozy Blog" />}
        </div>
    );
}

export default Home;