import { Link } from "react-router-dom";

export default function HomePage(){
    return (
        <>
        <h2>my home Page</h2>
        <p>
            Go to <Link to='/products'>products page</Link>
        </p>
        </>
    )
}