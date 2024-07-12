// import { createClient } from "redis";
// import { Engine } from "./trade/Engine";

// async function main() {
//     const engine = new Engine();
//     const redisClient = createClient();
//     redisClient.connect();
//     console.log("connected to redis");
    
//     while(true) {
//         const response = await redisClient.brPop("messages", 1000);
//         if(!response) {

//         } else {
//             engine.process(JSON.parse(response));
//         }
//     }

// }

// main();