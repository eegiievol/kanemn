"use strict";

class Bank {

    constructor() {
        this._accounts = [];
        this._nextNumber = 1;
    }    

    addAccount() {
        let acc = new Account(this._nextNumber);
        this._accounts.push(acc);
        this._nextNumber+=1;
        return acc.getNumber();
    }

    addSavingsAccount(interest) {

        let sacc = new SavingsAccount(this._nextNumber, interest);
        this._accounts.push(sacc);
        this._nextNumber+=1;
        return sacc.getNumber();
    }

    addCheckingAccount(overdraft) {

        let cacc = new CheckingAccount(this._nextNumber, overdraft)
        this._accounts.push(cacc);
        this._nextNumber+=1;
        return cacc.getNumber();
    }

    closeAccount(number){
        this._accounts = this._accounts.filter(function(item) {
            return item.getNumber() !== number;
        })
    }

    accountReport(){
        let lst = [];
        for(let i=0; i<this._accounts.length; i++){
            lst.push(this._accounts[i].toString());
        }
        return lst;
    }

    endOfMonth(){
        let endOf="";
        for(let i=0; i<this._accounts.length; i++){
            endOf+=(this._accounts[i].endOfMonth()+" ");
        }
        return endOf;
    }

}