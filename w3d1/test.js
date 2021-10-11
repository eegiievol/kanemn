
describe("Class test, checking account", function () {
  it("Checking account can goes minus value",
    function () {
        var cacc1 = new CheckingAccount(1, 1000/*overdraft*/);
        cacc1.deposit(500);
        cacc1.withdraw(1400);
        assert.deepEqual("Checking Account 1: balance -900 overdraft: 1000", cacc1.toString());

        
        var cacc2 = new CheckingAccount(2, 1000/*overdraft*/);
        cacc2.overdraft = 200;//setter
        cacc2.withdraw(1100);
        assert.deepEqual("Checking Account 2: balance -1100 overdraft: 200", cacc2.toString());
        

    });

});

describe("Class test, savings account", function () {
    it("Savings account will have interest rate",
      function () {
          var cacc3 = new SavingsAccount(3, 5/*interest*/);
          cacc3.deposit(500);
          cacc3.addInterest();
          assert.deepEqual("Savings Account 3: balance 525", cacc3.toString());
  
          
          var cacc4 = new SavingsAccount(4, 10/*interest*/);
          cacc4.deposit(1000);
          cacc4.addInterest();
          assert.deepEqual("Savings Account 4: balance 1100", cacc4.toString());
          
  
      });
  
  });


  
describe("Bank class test", function () {
    it("Bank class will have list of different type of accounts",
      function () {
          var bank = new Bank();          
          bank.addAccount();          //1
          bank.addCheckingAccount(500);
          bank.addCheckingAccount(700);           
          bank.addSavingsAccount(5);     //closed account              
          bank.addSavingsAccount(10);//5
          bank.closeAccount(4);

          bank._accounts[1].withdraw(300);
          bank._accounts[2].withdraw(500);
          bank._accounts[3].deposit(1000);
          assert.deepEqual("Savings Account 5: balance 1000", (bank.accountReport())[3]);
          assert.deepEqual(" warning balance: -300 warning balance: -500 interest added: 110 ", bank.endOfMonth());  
      });
  
  });
  