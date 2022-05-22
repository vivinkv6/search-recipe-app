function SearchBar({value,onChange,onSubmit}) {

    return(
<>
<form style={{display:'flex',justifyContent:'center'}} onSubmit={onSubmit}>
<input type="text" name="recipe" style={{borderRadius:'5px',border:'none',boxShadow:'2px 2px 3px black'}} onChange={onChange} value={value}/>
<button type="submit" style={{marginLeft:'5px',borderRadius:'5px'}}>search</button>
</form>
</>
    )
    
}
export default SearchBar;