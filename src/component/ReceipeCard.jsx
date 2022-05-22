
function RecipeCard({values}) {
const{strMeal,strCategory,strMealThumb,strSource}=values;
    return(
    <>
    
<div className="card h-50" style={{width: '25rem',marginBottom:'20px',marginRight:'20px',boxShadow:'5px 5px 10px black',display:'flex',justifyContent:'center'}} >
  <img src={strMealThumb} className="card-img-top h-50" alt="Not found"/>
  <div className="card-body">
    <h3 className="card-title">Meal: {strMeal}</h3>
    <h5 className="card-text">Category: {strCategory}</h5>
    <div style={{display:'flex',justifyContent:'center'}}>
    <a href={strSource} type='button' className="btn btn-primary" style={{padding:'10px',marginTop:'10px'}}>Ingredients</a>
    </div>
</div>
</div>

</>   
    );
    
}
export default RecipeCard;