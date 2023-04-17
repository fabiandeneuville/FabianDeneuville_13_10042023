import { Link } from "react-router-dom";

function NotFound(){
    return (
        <main className="main bg-dark notFound">
            <h1 className="notFound__heading">404</h1>
            <p className="notFound__text">Oops! Looks like you've reached a page that doesn't exist.</p>
            <Link className="button notFound__button" to="/">Home</Link>
        </main>
    );
};

export default NotFound;