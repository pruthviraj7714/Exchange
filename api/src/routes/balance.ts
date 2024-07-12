import { Router } from "express";


export const balanceRouter = Router();


balanceRouter.get('/', async (req, res) => {
    const { userId } = req.body;

    //get from db

    return res.json({
        balance : "100$"
    })

})