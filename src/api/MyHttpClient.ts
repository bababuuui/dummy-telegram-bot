import axios, {AxiosInstance} from "axios";



export class MyHttpClient {

    public static  get openWeatherInstance(): AxiosInstance {
        return axios.create({
            baseURL: "http://api.openweathermap.org/data/2.5/",
            timeout:3000,
            headers: {
                "accept":"content-type/json"
            }
        })
    }

}





