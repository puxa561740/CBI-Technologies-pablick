import * as axios from "axios";



export const apiFilm = {
   getFilms() {
    const instance = axios.create({
      baseURL: 'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8',
    })
    return instance.get().then(res => res.data)
  },
  searchFilm(serchWord, pageNum) {
    const instance = axios.create({
      baseURL: `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${serchWord}&page=${pageNum}`,
    })
    return instance.get()
  }
}

