import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";




const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon']);

    const onAddCategory= (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([  newCategory, ...categories]);
        // setCategories(cat => [...categories, 'Valorant']);
    }

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory 
      // setCategories = {setCategories}
        onNewCategory={(event) =>onAddCategory(event)}
      ></AddCategory>
        
        {categories.map(category =>(
              <GifGrid key={category} category={category}/>
            )
        )}
     
    </>
  )
}

export default GiftExpertApp
