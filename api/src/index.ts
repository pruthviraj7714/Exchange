import express from "express";
import { orderRouter } from "./routes/order";
import { tradesRouter } from "./routes/trades";
import { klineRouter } from "./routes/kline";
import { depthRouter } from "./routes/depth";
import { tickerRouter } from "./routes/ticker";

const app = express();

app.use(express.json());

app.use("api/v1/order", orderRouter);
app.use("api/v1/trades", tradesRouter);
app.use("api/v1/kline", klineRouter);
app.use("api/v1/ticker", tickerRouter);
app.use("api/v1/depth", depthRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
