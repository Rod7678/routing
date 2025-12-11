import { useParams } from "react-router-dom"

export default function ProducDetails() {
    const params = useParams();

    return (
        <>
        <h1>product Detail of {params.productId}</h1>
        </>
    )
}