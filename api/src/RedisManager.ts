import { RedisClientType, createClient } from "redis";

export class RedisManager {
  private static instance: RedisManager;
  private client: RedisClientType;
  private publisher: RedisClientType;

  private constructor() {
    this.client = createClient();
    this.publisher = createClient();

  }

  public static getInstance() : RedisManager {
    if (!RedisManager.instance) {
      RedisManager.instance = new RedisManager();
    }
    return RedisManager.instance;
  }


  sendAndAwait(message : any) {
        return new Promise<any>((resolve) => {
      const id = this.getRandomClientId();
      this.client.subscribe(id, (message) => {
        this.client.unsubscribe(id);
        resolve(JSON.parse(message));
      })
      this.publisher.lpush("messages", JSON.stringify({clientId : id, message}))
    })
  }
}

  public getRandomClientId() {
  return Math.random().toString(36).substring(2,15) + Math.random().toString().substring(2,15);
}
