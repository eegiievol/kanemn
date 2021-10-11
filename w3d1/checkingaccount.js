"use strict";

class CheckingAccount extends Account{    
    
    constructor (number, overdraft){
        
        super(number);
        this._overdraft = overdraft;

    }

    set overdraft(value){
        this._overdraft = value;
    }

    get overdraft(){
        return this._overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._overdraft + super._balance) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + " overdraft: " + this._overdraft;
    }

    endOfMonth() {
        if (this._balance<0) {
            return "warning balance: " + this._balance;
        }
        else {
            return "Fine";
        }
    }

}