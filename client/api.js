import axios from 'axios'

export async function getAppList(){
    try {
        const result = await axios.get(`${import.meta.env.VITE_EXPRESS_URL}/apps`);
        console.log(result)
        return result;
    } catch (error) {
        console.error(error);
    }
}