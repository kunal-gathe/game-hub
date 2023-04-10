import { useEffect, useState } from "react";
import apiClient from "../servicess/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}
interface FetchGenresResponse {
    count: number;
    results: Genre[];
}
const useGenres =()=>{

    const [genres , setgenres] = useState<Genre[]>([])
    const [error, setError] = useState("");
    const [isLoading, setloading] = useState(false)

    useEffect (()=>{
        const controller = new AbortController();

        setloading(true);
        apiClient
        .get<FetchGenresResponse>("/genres", {signal : controller.signal})
        .then((res) =>{
            setgenres(res.data.results);
            setloading(false);
        })
        .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message)
            setloading(false);
        })

        return ()=> controller.abort();
    },[])

    return {genres, error, isLoading}
}

export default useGenres;