import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
const [value, setValue] = useLocalStorage('dark');

return [value, setValue]
}