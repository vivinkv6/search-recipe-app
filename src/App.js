import { useState,useEffect } from 'react';
import './App.css';
import SearchBar from './component/searchBar.jsx';
import RecipeCard from './component/ReceipeCard.jsx';

function App() {
  const apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const[query,setQuery] = useState("");
  const[recipe,setRecipe] = useState([]);

  const searchRecipe = async() =>{
   
    const url = apiurl+query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipe(data.meals);
   
  }
  useEffect(()=>{
searchRecipe();
  },[]);

  //handle Change function
  const handleChange=(event)=>{
event.preventDefault();
searchRecipe();
  }
  return (
  <div className='container'>
    
    <h1>Our Recipe App</h1>
    <SearchBar onChange={(e)=>{setQuery(e.target.value)}} onSubmit={handleChange} value={query}/>
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
