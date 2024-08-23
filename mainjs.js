const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
let totalBalance =10.000;
const userDeposit = document.getElementById("userDeposit");
const btnDeposir = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

//create our number formatter.
const formatter = new Intl.NumberFormat('en-US',{
    style: 'currancy',currency:'INR',minimumFractionDigits: 2,
    /*
    the default value for minimumFractionDigits depends on the currency and 
    is usally already 2
    */
});

// accept deposits from user, store deposits in array
 btnDeposit.addEventListener('click',() =>{
    //check if deposit is a number
    if(isNaN(userDeposit.value)) {
        alert("Please enter a number .");
        return userDeposit.value = ' ';

    }else {
        //checks if deposit is a number
        if (userDeposit.value < 0.01 || userDeposit.value > 100000) {
            alert("You can only deposit between 0.01 and 1.0000")
            return userDeposit.value = ' ';

        }else {
            //push deposit to array
            deposits.push(Number(userDeposit.value));
            //calculate total Balance 
            totalBalance += 
            (Number(userDeposit.value));

            //format TotalBalance to show Rs XX.XX (2 decimal places)

             let totalBalanceFormatted = formatter.format(totalBalance);

             document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

             //print deposit to console to verify success

             console.log("Rs" + userDeposit.value);
             return userDeposit.value = ' ';

        }
        }
    });

    //accept withdrawals from user, store withdrawals in array

    btnWithdraw.addEventListener('click',() =>
    {
        //checks if withdrawal is a number 

        if(isNaN(userWithdraw.value)){
            alert("Please enter a number.");
            return userWithdraw.value = ' ';
        } else {
         // checks if withdrawal meets parameters

         if (userWithdraw.value > totalBalance - 5) {
            alert("Your total balance cannot drop below Rs5.");
            return userWithdraw.value = ' ';

         } else {
            //push withdrawal to array

            withdrawals.push(Number(userWithdraw.value));
            
              //calculate Total Balance

              totalBalance -= (Nunber(userWithdraw.value));

              //format TotalBalance to show Rs. XX.XX (2 decimal places)
               let totalBalanceFormatted = formatter.format(totalBalance);

               document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

               //print withdrawal to console to verfify succecc

               console.log("Rs" + userWithdraw.value);
               return userWithdraw.value = ' ';

           } 
        }
    });

    //format TotalBalance to show Rs XX.XX (2 decimal places)

    let totalBalanceFormatted = formatter.format(totalBalance);
    document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
 