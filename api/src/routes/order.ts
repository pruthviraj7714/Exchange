import { Router } from "express";
import { RedisManager } from "../RedisManager";


export const orderRouter = Router();


orderRouter.post('/', (req, res) => {
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


orderRouter.delete('/', async (req, res) => {
  const { orderId, market} = req.body;
   const response = await RedisManager.getInstance().sendAndAwait({
    type : "DELETE_ORDER",
    data: {
      orderId,
      market
    }
  })
return res.json(response.payload)
})

orderRouter.get('/open', async (req, res) => {
  const response = await RedisManager.getInstance().sendAndAwait({
    type : "GET_OPEN_ORDER",
    data : {
      userId : req.query.userId as string,
      market : req.query.market  as string
    
    }
  
  res.json(response.payload);
  })


})
