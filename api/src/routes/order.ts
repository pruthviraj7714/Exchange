import { Router } from "express";
import { RedisManager } from "../RedisManager";

export const orderRouter = Router();

orderRouter.post('/', async (req, res) => {
    const {  market, quantity, side, price, userId } = req.body;

    const response = await RedisManager.getInstance().sendAndAwait({
        type : "CREATE_ORDER",
        data : {
            market,
            quantity,
            side,
            price, 
            userId
        }
    })
    return res.json(response.payload);
})