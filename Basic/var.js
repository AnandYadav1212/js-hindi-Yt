const accountId = 144435
let accountEmail = "anand@gmail.com"
var accountPassword = "12345"
accountCity = "Jaiput"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "11232123";
accountCity = "Bengaluru";

/* 
Perfer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])