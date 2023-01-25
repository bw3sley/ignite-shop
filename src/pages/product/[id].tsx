import { useRouter } from "next/router";

export default function Product() {
    const { query } = useRouter();

    return (
        <h1>Product: {JSON.stringify(query, null, 4)}</h1>
    )
}