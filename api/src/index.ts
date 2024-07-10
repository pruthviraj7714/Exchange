import express from "express";
import { orderRouter } from "./routes/order";
import { tradesRouter } from "./routes/trades";
import { klineRouter } from "./routes/kline";
import { depthRouter } from "./routes/depth";
import { tickerRouter } from "./routes/ticker";

const app = express();

app.use(express.json());

app.use("/order", orderRouter);
app.use("/trades", tradesRouter);
app.use("/kline", klineRouter);
app.use("/ticker", tickerRouter);
app.use("/depth", depthRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
