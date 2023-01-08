import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExtpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (value) => {
    if(categories.includes(value)) return;
    setCategories([value, ...categories]);
  }

  return (
    <>
      <h1>GifExtpertApp</h1>

      <AddCategory 
        // First way
        //setCategories={setCategories}

        // Second way
        newCategory={onAddCategory}
      />

      <ol>
        {
          categories.map(category => 
            <GifGrid 
              key={category}
              category={category}
            />
          )
        }
      </ol>
    </>
  )
}
