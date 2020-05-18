import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        return initialValue;
    })

    const setLocalStorage = value => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }
    return [value, setLocalStorage];
}