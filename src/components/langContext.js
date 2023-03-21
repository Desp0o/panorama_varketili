import { useState, createContext } from "react";

export const LangContext = createContext()

export const LangContextProvider = ({children}) =>{
    const [isGeo, setIsGeo] = useState(false)
    const [isRus, setIsRus] = useState(false)
    const [isEng, setIsEng] = useState(false)

    function makeENG() {
        setIsEng(true)
        setIsRus(false)
        setIsGeo(false)
        localStorage.setItem('language', 'eng')
    }
    //*************//

    function makeGEO() {
        setIsEng(false)
        setIsRus(false)
        setIsGeo(true)
        localStorage.removeItem('language')
    }
    //*************//

    function makeRUS() {
        setIsEng(false)
        setIsRus(true)
        setIsGeo(false)
        localStorage.setItem('language', 'rus')
    }


    return(
        <LangContext.Provider value={{makeENG, makeGEO, makeRUS, isEng, isGeo, isRus, setIsEng, setIsGeo, setIsRus}}>
            {children}
        </LangContext.Provider>
    )
}