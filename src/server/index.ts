import axios, {AxiosInstance} from "axios";

const clientHTTPS: AxiosInstance = axios.create({
    baseURL: "https://www.api.leonardodelgado.com/"
});
export default clientHTTPS;