import React, {useState} from 'react'
import { json } from 'body-parser'

export const useLocalStorage = (key, initVal) => {
    const [localStorage, setLocalStorage] = useState(() => {
        const item = window.localStorage.getItem( key )
        return ( item ? JSON.parse(item) : initVal)
    })
    
    const setValue = (value) => {
        setLocalStorage(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [localStorage, setValue ]
}

export default useLocalStorage