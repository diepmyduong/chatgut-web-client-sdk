'use strict';
import { Config } from './config';
import { URL } from './utils/helper';

declare var $:any;

export class Api {
 
    private static callback(settings:any){
        return new Promise((resolve:any,reject:any)=>{
            try { 
                $.ajax(settings).done((response:any) => {
                    resolve(response);
                }).fail((request:any,err:any,status:any) => {
                    reject(err,status);
                });
            }catch(err){
                reject(err);
            }       
        })
    }

    public static setAccessToken(token:string){
        sessionStorage.setItem('chatgut.api.token',token);
    }

    public static getAccessToken(){
        return sessionStorage.getItem('chatgut.api.token');
    }

    public static smsVerify(data:any){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/smsVerify"),
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": JSON.stringify(data)
        }
        return Api.callback(settings);
    }
}