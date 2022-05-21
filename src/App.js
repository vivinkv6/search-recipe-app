import { useState,useEffect } from 'react';
import './App.css';
import SearchBar from './component/searchBar.jsx';
import RecipeCard from './component/ReceipeCard.jsx';

function App() {
  const apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const[isloading,setIsloading] = useState(false);
  const[query,setQuery] = useState("");
  const[recipe,setRecipe] = useState([]);

  const searchRecipe = async() =>{
    setIsloading(true);
    const url = apiurl+query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipe(data.meals);
    setIsloading(false);
  }
  useEffect(()=>{
searchRecipe();
  },[])
  return (
  <div className='container'>
    
    <h1>Our Recipe App</h1>
<div className='recipe'>
  {recipe?recipe.map((value)=>{
    return(
    <RecipeCard key={value.idMeal} values={value} />
    );  
     
      
  }):'Not Found'}
</div>
  </div>
  
  );
}

export default App;
