import {MyHttpClient} from "./MyHttpClient";
import  config from "../config/default.json"

export class OpenWeatherAPIHandler {


    public static async getCurrentWeatherForCity( city: string) : Promise<any> {
        const response = await MyHttpClient.openWeatherInstance.get(`/weather?q=${city}&${config.openWeatherKey}`);
        return response.data;
        // return new Promise(function(resolve, reject) {
        //     MyHttpClient.openWeatherInstance.get(`/weather?q=${city}&${config.openWeatherKey}`).then( (response)=> {
        //         resolve(response.data);
        //     }).catch( (e)=>{
        //         reject(`Can not find such city - ${city}`)
        //     })
        // });
    }

}

