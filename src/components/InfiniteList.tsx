import {useEffect, useState} from "react";
import axios from "axios";

export default function InfiniteList () {
    const [data, setData] = useState<any[]>([])
    const [page, setPage] = useState(1)
    const [error, setError] = useState<any>(null)


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
        }
        fetchData();
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    const fetchData = async() => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=10&limit=12');
            const data = await response.json();
            setData(prevData => [...prevData, ...data])
            setPage(prevPage => prevPage + 1)
        } catch(error) {
            setError(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <ul>
                {data?.map(data => (
                    <li key={data.id}>{data.title}</li>
                ))}
            </ul>
        </>
    )
}