import { useState } from "react"
import { useGif } from "../hooks/useGif"

export const GifApp = () => {

  const {handleGetGif, arregloGifs} = useGif()
  const [categoria, setCategoria] = useState('')
  
  return (
    <>
      <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50">
        <form className="d-flex" onSubmit={(e) => {handleGetGif(categoria, e) }}>
          <input className="form-control me-2" type="text" onChange={(e) => {setCategoria(e.target.value)}}/>
          <input className="btn btn-secondary" type ="submit" value="Buscar gif"/>
        </form>
      </div>
  
      <div className="d-flex flex-row justify-content-center alig-items-center row row-cols-2 row-cols-lg- g-2">
        {arregloGifs.map(({id, url})=>{
          return (
            <img className="w-25" key={id} src ={url}/>
          )
        })}
      </div>
    </>
  )
}