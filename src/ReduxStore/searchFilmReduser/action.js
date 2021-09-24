import { SERCH, IS_SEARCH, CHANGE_WORD, CHANGE_NUM_PAGES, CHANGE_CURENT_PAGE, PLUS_PAGE_ONE, MINUS_PAGE_ONE } from "./constans";


export const search = (resultSearach) => ({type: SERCH, resultSearach})
export const isSearch = (isS) => ({type: IS_SEARCH, isS})
export const changeEnterWorld = (word) => ({type: CHANGE_WORD, word})
export const allPage = (num) => ({type: CHANGE_NUM_PAGES, num})
export const changeCurentPages = (num) => ({type: CHANGE_CURENT_PAGE, num})
export const plusPageOne = () => ({type: PLUS_PAGE_ONE})
export const minusPageOne = () => ({type: MINUS_PAGE_ONE})