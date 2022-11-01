import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export function Home() {



    const [input, setInput] = useState("")
    const [mealList, setMealList] = useState([])
    
    function handleChange(event) {
        setInput(event.target.value)
    }



    async function fetchMeal() {

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        const json = await response.json()

        console.log(json)
        setMealList([...json.meals])
    }

    
    


    return(
        <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 20}}>
            <input value={input} onChange={handleChange}/>
            <button onClick={fetchMeal}>SEARCH MEAL </button>
        </div>

        <div>
        {mealList.map(meal => <Link style={{textDecoration: 'none'}} to={`/details/${meal.idMeal}`}> 
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',padding: 50, }}>
                                    <img width="400px" src={meal.strMealThumb}/>
                                    <h2>{meal.strMeal}</h2>
                                </div>
                            </Link> )}
        </div>
        </>
    )
}

