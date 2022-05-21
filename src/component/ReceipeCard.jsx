const RecipeCard=({values,key})=> {
const{strMeal,strCategory,strMealThumb,strIngredient1}=values;
    return(
    <>
    
<div className="card" style={{width: '25rem',marginBottom:'20px',marginRight:'20px'}}>
  <img src={strMealThumb} className="card-img-top" alt="Not found"/>
  <div className="card-body">
    <h5 className="card-title">{strMeal}</h5>
    <p className="card-text">{strCategory}</p>
  
    <button type="button" className="btn btn-primary">
  Ingredients
</button>

</div>
</div>

</>   
    );
    
}
export default RecipeCard;