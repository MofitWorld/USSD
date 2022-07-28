"use strict";
alert("welcome to mofit microfinance bank");
const func = () => {
  let userUssd = prompt("Enter your Mofit USSD code");
  switch (userUssd) {
    case "*123#":
      let userAnswer = Number(
        prompt(
          "Welcome, how can we help you? \n 1. Recharge me.\n 2. Transfer. \n 3. Recharge others. \n 4. Data."
        )
      );
      switch (userAnswer) {
        case 1:
          let userRechargeMe = Number(
            prompt("Enter the amount you want to recharge")
          );
          alert(`You have successfully recharged ${userRechargeMe} Naira`);
          break;
        case 2:
          let userTransfer = Number(
            prompt("Enter the amount you want to transfer")
          );

          let userBankSelector = Number(
            prompt(
              "Enter the bank you want to transfer to \n 1. Zenith \n 2. Access \n 3. GTBank \n 4. Jaiz "
            )
          );

          switch (userBankSelector) {
            case 1:
              let userZenith = Number(prompt("Enter the account number"));
              return alert(
                `You have successfully transferred ${userTransfer}Naira to Zenith account ${userZenith}`
              );
              break;
            case 2:
              let userAccess = Number(prompt("Enter the account number"));
              return alert(
                `You have successfully transferred ${userTransfer}Naira to Access account ${userAccess}`
              );
            case 3:
              let userGTBank = Number(prompt("Enter the account number"));
              return alert(
                `You have successfully transferred ${userTransfer}Naira to Access account ${userGTBank}`
              );
            case 4:
              let userJaiz = Number(prompt("Enter the account number"));
              return alert(
                `You have successfully transferred ${userTransfer}Naira to Access account ${userJaiz}`
              );
          }
          break;

          break;
        case 3:
          let userRechargeOthers = Number(
            prompt("Enter the amount you want to recharge")
          );
          let userRechargeNumber = prompt("Enter the Recipient's Phone Number");
          switch (typeof userRechargeNumber) {
            case "number":
              switch (userRechargeNumber.length) {
                case 11:
                  alert(
                    `You have successfully recharged ${userRechargeOthers} Naira on ${userRechargeNumber}`
                  );
                default:
                  alert("Phone number must be equal to 10");
                  throw new Error("Number is less than 11");
              }
              break;

            default:
              alert("Please enter 11 digit  phone Number");
              break;
          }

          break;
        default:
          alert("Enter the correct code");
      }
  }
};
func();
