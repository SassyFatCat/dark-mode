import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
const [storedValue, setStoredValue] = useState(() => {
    if (localStorage.get(key)) {
        return JSON.parse(localStorage.get(key))
    }
    return initialValue
});

const setValue = value => {
    setStoredValue(value);
    localStorage.set(key, value);
}

return [storedValue]
}