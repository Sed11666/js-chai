const accountId=144221
let accountEmail="syed@google.com"
var accountPassword="12345"
accountCity="Bangalore"
let accountState

// accountId=2 not allowed
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

/*Prefer not to use var
because of issue in block scope and functional scope
*/