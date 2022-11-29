import { Link } from "react-router-dom";
const Navbar = () => {
    const title= "Cozy blog"
    return ( 
        <nav className="navbar">
            <h1>{title}</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/create" className="newblog">New Blog</Link>
            </div>
        </nav>
     );
}

export default Navbar;