import { Link, useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();
    function useNavigateHandler(){
        setTimeout(()=>{
            navigate('/products')
        },1000)
    }

    return (
        <>
        <h2>my home Page</h2>
        <p>
            Go to <Link to='/products'>products page</Link>
        </p>
        <button onClick={useNavigateHandler}>navigate to product page with 1s </button>
        </>
    )
}