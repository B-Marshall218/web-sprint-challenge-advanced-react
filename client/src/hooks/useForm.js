// write your custom hook here to control your checkout form
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialState, key) => {
    const [value, setValue] = useLocalStorage(initialState, key);
    // const handleChanges = e => {

    // }

    return [value, setValue];
}