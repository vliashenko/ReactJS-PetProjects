import data from "../data";
import OurBestItem from "../Components/OurBestItem";

function ShowProducts() {
    let favoritesData = data.filter(el => el.favorites);
        
    let [{favorites}] = favoritesData;
        
        let element = favorites.map((elem,i) => {
            const {...elemProps} = elem;
            return (
              <OurBestItem 
                key={i}
                {...elemProps}/>  
            )
        })

        return element
}

export default ShowProducts;