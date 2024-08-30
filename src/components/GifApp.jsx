import { useGif } from "../hooks/useGif"
import { ContenedorGif } from "./ContenedorGif"
import { BuscarGif } from "./BuscarGif"

export const GifApp = () => {

  const {handleGetGif, arregloGifs} = useGif()
  
  return (
    <>
    <BuscarGif handleGetGif={handleGetGif} />
    <ContenedorGif arregloGifs={arregloGifs}/>
    </>
  )
}