import axios, {AxiosInstance} from "axios";

const clientHTTPS: AxiosInstance = axios.create({
    baseURL: "https://app-back.herokuapp.com/"
});
export default clientHTTPS;