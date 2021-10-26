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
                let withdrawal = prompt("Enter an amount to withdaw: ");
                totalMoney = totalMoney - Number(withdrawal);
                alert("Your total balance is: " + totalMoney);
                break;
            case "D":
                let deposit = prompt("Enter an amount to deposit: ");
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