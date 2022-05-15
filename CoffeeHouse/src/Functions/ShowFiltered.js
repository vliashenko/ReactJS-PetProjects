import data from "../data";
import ProductsItem from "../Components/ProductsItem";

function ShowFiltered(filterName, term) {
  let productsData = data.filter(el => el.products);
  let [{products}] = productsData;
  
  if(term.length === 0 && filterName === "All") {
    let element = products.map((elem,i) => {
      const {...elemProps} = elem;
        return (
          <ProductsItem 
            key={i}
            {...elemProps}/>  
        )
      })
    return element

  } else if(term.length === 0 && filterName !== "All") {
    let filtered = products.filter(el => el.country === filterName);

    let element = filtered.map((elem,i) => {
      const {...elemProps} = elem;
        return (
          <ProductsItem 
            key={i}
            {...elemProps}/>  
        )
      })
    return element;

  } else if (term.length > 0 && filterName === "All") {
    let upperTerm = term.toUpperCase()

    let array = products.filter((item,i) => {  
      if(item.name.indexOf(upperTerm) > -1){
        return item
      } 
    })

    return array.map((elem,i) => {
      const {...elemProps} = elem;
      return (
        <ProductsItem 
          key={i}
          {...elemProps}/>  
      )
    })
  } else if(term.length > 0 && filterName !== "All") {
    let filtered = products.filter(el => el.country === filterName);

    let upperTerm = term.toUpperCase();

    let array = filtered.filter((item,i) => {  
      if(item.name.indexOf(upperTerm) > -1){
        return item
      } 
    })

    if(array.length > 0) {
      let element = array.map((elem,i) => {
      const {...elemProps} = elem;
        return (
          <ProductsItem 
            key={i}
            {...elemProps}/>  
        )
      })
    return element
    } else {
      return "No matches found("
    }

    
  } 

}

export default ShowFiltered;

