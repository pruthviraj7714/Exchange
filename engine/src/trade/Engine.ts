import fs from 'fs'

interface UserBalance {
    [key : string] : {
        available : number;
        locked : number
    }
}

export class Engine {
    private orderbooks = [];
    private balances :Map<string, UserBalance> = new Map();

    // constructor() {
    //     let snapshot = null;
    //     try {
    //         if(process.env.WITH_SNAPSHOT) {
    //             snapshot = fs.readFileSync("./snapshot.json");
    //         }
    //     } catch (error) {
    //         console.log("No snapshot found");
            
    //     }

    //     if(snapshot) {
    //         const snapShot = JSON.parse(snapshot.toString());
    //         this.orderbooks = snapShot.orderbooks.map((o : any) => new this.orderbooks(o.baseAsset, o.bids, o.asks, o.lastTradeId, o.curentPrice));
    //         this.balances = new Map(snapShot.balances);
    //     } else{
    //         this.orderbooks = [new Orderbook('TATA', [], [], 0, 0)];
    //         this.setBaseBalances();
    //     }

    //     setInterval(() => {
    //         this.saveSnapShot();
    //     }, 1000*3);

    // }



}