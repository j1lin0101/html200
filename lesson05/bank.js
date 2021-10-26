console.log("Script")

function bank() {
    let totalMoney = 0;
    let userQuit = false;
    while (!userQuit) {
        let input = prompt("Welcome to the bank! \nEnter Q to quit \nEnter W to Withdraw \nEnter D to Deposit \nEnter B to view Balance");
        switch (input) {
            case "Q":
                alert("Thank you for using the bank!");
                userQuit = true;
                break;
            case "W":
                let withdrawal = prompt("Enter an amount to withdraw: ");

                if (withdrawal > totalMoney) {
                    alert("Excessive Withdrawal. You don't have that much money to take");
                    break;
                } else if ((totalMoney - withdrawal) < 300) {
                    let lowBalancePrompt = prompt("Your withdrawal will leave you with less than $300. Are you sure you want to withdraw?");
                    if (lowBalancePrompt == "yes") {
                        totalMoney = totalMoney - Number(withdrawal);
                        alert("Your total balance is: " + totalMoney);
                        break;
                    }
                    break;
                }

                totalMoney = totalMoney - Number(withdrawal);
                alert("Your total balance is: " + totalMoney);
                break;

            case "D":
                let deposit = prompt("Enter an amount to deposit: ");
                if (deposit > 50000) {
                    alert("You cannot deposit amounts greater than $50,000");
                    break;
                }
                totalMoney = totalMoney + Number(deposit);
                alert("Your total balance is: " + totalMoney);
                break;
            case "B":
                alert("Your total balance is: " + totalMoney);
                break;
            default:
                alert("I don't know that command");
                break;
        }
    }

}