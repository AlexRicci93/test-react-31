import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"

export function Details() {


    const [data, setData] = useState({})

    const {id} = useParams("id")


    async function fetchData() {

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const json = await response.json()

        setData({
       ...json.meals[0]
            
            
        })
    }


    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: 100}}>
        <img  width="400"src={data.strMealThumb}/>
        <h2>Meal: {data.strMeal}</h2>
        <h4>Area: {data.strArea}</h4>
        <h4>Category: {data.strCreativeCommonsConfirmed}</h4>
        <h4>Ingredients: {data.strIngredient1}</h4>
        <h4></h4>
        </div>
        </>
    )
}