"use strict";

class SavingsAccount extends Account{

    constructor(number, interest){
        super(number);
        this._interest = interest;
    }    

    addInterest(){
        this._balance += (this._balance * this._interest / 100);
    }

    toString() {
        return "Savings Account " + this._number + ": balance " + this._balance;
    }

    endOfMonth() {
        this.addInterest();
        return ("interest added: " + (this._balance * this._interest / 100));
    }

}