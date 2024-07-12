
export interface Order {
    price : number,
    quantity : number,
    orderId: string,
    filled : number,
    side : "buy" | "sell",
    userId : string
}

export interface Fill {
    price : string;
    qty : number;
    tradeId : number;
    otherUserId : string;
    marketOrderId : string;
}


export class Orderbook {
    bids: Order[];
    asks : Order[];
    baseAsset : string;
    quoteAsset : string;
    lastTradeId : number;
    currentPrice : number;


    constructor(baseAsset : string, quoteAsset : string, bids: Order[], asks: Order[], lastTradeId: number, currentPrice : number) {
        this.bids = bids;
        this.asks = asks;
        this.baseAsset = baseAsset;
        this.quoteAsset = quoteAsset;
        this.lastTradeId = lastTradeId || 0;
        this.currentPrice = currentPrice || 0;
    }

    ticker() {
        return `${this.baseAsset}_${this.quoteAsset}`;
    }

    addOrder(order : Order) {

    }







}