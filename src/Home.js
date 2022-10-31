import { useEffect, useState } from "react"



export function Home() {



    const [input, setInput] = useState()
    const [milList, setMilList] = useState([])
    

    async function fetchMeal() {

        const response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        const json = await response.json()

        console.log(json)
        // setMilList([...json])
    }


    

   useEffect(() => {

    fetchMeal()
   }, [])

    function handleChange(event) {
        setInput(event.target.value)
    }
    


    return(
        <>
        <div>
            <input value={input}onChange={handleChange}/>
            <button onClick={fetchMeal}>SEARCH MEAL </button>
        </div>
        </>
    )
}