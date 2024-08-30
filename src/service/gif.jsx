const api_key = 'dNaLaxxYNoAqAYaBAYZ1EFiJgFXXmFwP'
const limit = 10

export const reqGif = async (categoria) => {
    try {

        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
        const {data} = await response.json()

        const arregloGifs = data.map((gif)=>({
              id: gif.id,
              url: gif.images.original.url
        }))

    return arregloGifs

    } catch (error) {
      console.log(error)
    }
}