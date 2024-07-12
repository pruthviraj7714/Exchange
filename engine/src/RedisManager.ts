import { createClient, RedisClientType } from "redis"


export class RedisManager {
    private client : RedisClientType
    private static instance : RedisManager

    constructor() {
        this.client = createClient();
        this.client.connect();
    }

    public static getInstance() {
        if(!RedisManager.instance) {
            RedisManager.instance = new RedisManager();
        }
        return RedisManager.instance;
    }


    public pushMessage(message : any) {
        this.client.lPush("db_processor", JSON.stringify(message));
    }

    public publishMessage(channel : string, message: any) {
        this.client.publish(channel, JSON.stringify(message));
    }

    public sendToApi(clientId : string, message : any) {
        this.client.publish(clientId, JSON.stringify(message));
    }









}