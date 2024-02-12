import { useQuery } from "@tanstack/react-query";
import {useState} from "react"




export function Quotes (){

    const [loading, setLoading] = useState<boolean>(true)

    const {data: quote, isLoading, refetch, isError} = useQuery({queryKey: ['quote'], queryFn: async ()=>{
        setLoading(true)
        const response = await fetch("https://quotable.io/random")

        const quoteData = await response.json()

        setLoading(false)
        return quoteData
    }})

    

     function handleClick(){
        refetch()
     }


    return <div className="quotes-con">
            {loading ? (
                <h1>Loading.....</h1>
            ) : (
                <div>
                    <p className="quote"> ❝{quote?.content}❞</p>
                    <h3 className="author">{quote?.author}</h3>
                    <button className="new" onClick ={handleClick}>New Quote</button>
                </div>
            )}
        </div>
}