/**

given an array of objects,
each object is an account with the following structure

outout: boolean

struct Account {
  var email: String
  var phoneNumber: String
  var firstName: String
  var lastName: String
  var address: String
}

example 1:
[{
  email: 'kc@gmail.com'
  phoneNumber: '1234'
  firstName: 'kanchan'
  lastName: 'chauhan'
  address: 'atlanta'
},
{
  email: 'kc@gmail.com'
  phoneNumber: '12345'
  firstName: 'banchan'
  lastName: 'hauhan'
  address: 'miami'
}]
return true

example 2:
[{
  email: 'abc@gmail.com'
  phoneNumber: '1234'
  firstName: 'kanchan'
  lastName: 'chauhan'
  address: 'atlanta'
},
{
  email: 'kc@gmail.com'
  phoneNumber: '12345'
  firstName: 'kanchan'
  lastName: 'hauhan'
  address: 'miami'
}]
return false

example 3:

[{
  email: 'abc@gmail.com'
  phoneNumber: '1234'
  firstName: 'kanchan'
  lastName: 'chauhan'
  address: 'atlanta'
},
{
  email: 'ABc@gmail.com'
  phoneNumber: '1234'
  firstName: 'Kanchan'
  lastName: 'Chauhan'
  address: 'ATLANTA'
}]

return true

Rules:
1. two accounts have same email
2. two acounts have same phone number
3. two accounts have same firstname + lastname + address

assumptions:
- valid email and phonenumber format input
- case insensitive

O(n) time, space : O(n)

let tempObj = {
    email: {email1: true},
    phone: {},
    firstName: {'fName1,lName1,addr': true},
}
O(n * 5n) ~ O(n^2)
[acc1, acc2, acc3]
  ^           ^
check first rule => false
check second rule => false
check third rule
    'fName3,lName3,addr3'
 */
    function checkDuplicates (accounts) {
      let tempAcc = {
        'email':{},
        'phoneNumber': {},
        'firstLastAddr': {}
      }

      for (let account of accounts) {
        let email = account.email.toLowerCase();
        let phNum = account.phoneNumber;
        let fName = account.firstName.toLowerCase();
        let lName = account.lastName.toLowerCase();
        let addr = account.address.toLowerCase();

        let emails = tempAcc.email;
        let phNumbers = tempAcc.phoneNumber;
        let nameAddrs = tempAcc.firstLastAddr;

        if (emails[email]) {
          return true;
        } else {
          emails[email] = true;
        }
        if (phNumbers[phNum]) {
          return true;
        } else {
          phNumbers[phNum] = true;
        }
        if (nameAddrs[`${fName},${lName},${addr}`]){
          return true;
        } else {
          nameAddrs[`${fName},${lName},${addr}`] = true;
        }
      }
      return false;
    }

    O(n) time O(n) space

    set: ['hello', 'goodbye']
    {
      hello: 'hello',
      goodbye: 'goodbye'
    }

    function checkDuplicates(accounts) {
      const emails = new Set()
      const numbers = new Set()
      const namesAndAddresses = new Set()

      for (const account of accounts) {
        const email = account.email.toLowerCase();
        const phNum = account.phoneNumber;
        const fName = account.firstName.toLowerCase();
        const lName = account.lastName.toLowerCase();
        const addr = account.address.toLowerCase();
        const nameAddress = fName + ',' + lName + ',' + addr

        if (email in emails) return true
        if (phNum in numbers) return true
        if (nameAddress in namesAndAddresses) return true

        emails.add(email)
        numbers.add(phNum)
        namesAndAddresses.add(nameAddress)
      }

      return false
    }

    let accounts1 = [{
      email: 'kc@gmail.com',
      phoneNumber: '1234',
      firstName: 'kanchan',
      lastName: 'chauhan',
      address: 'atlanta',
    },
    {
      email: 'kc@gmail.com',
      phoneNumber: '12345',
      firstName: 'banchan',
      lastName: 'hauhan',
      address: 'miami',
    }]

    let accounts2 = [{
      email: 'abc@gmail.com',
      phoneNumber: '1234',
      firstName: 'kanchan',
      lastName: 'chauhan',
      address: 'atlanta',
    },
    {
      email: 'dce@gmail.com',
      phoneNumber: '12345',
      firstName: 'anchan',
      lastName: 'chauhan',
      address: 'miami',
    },
    {
      email: 'fgh@gmail.com',
      phoneNumber: '123456',
      firstName: 'kanchan',
      lastName: 'chauhan',
      address: 'miami',
    }]

    let accounts3 = [{
      email: 'abc@gmail.com',
      phoneNumber: '1234',
      firstName: 'kanchan',
      lastName: 'chauhan',
      address: 'atlanta',
    },
    {
      email: 'ABC@gmail.com',
      phoneNumber: '12345',
      firstName: 'banchan',
      lastName: 'hauhan',
      address: 'miami',
    },
    {
      email: 'fgh@gmail.com',
      phoneNumber: '1235',
      firstName: 'kanchan',
      lastName: 'hauhan',
      address: 'miami',
    }]

    let accounts4 = [{
      email: 'abc@gmail.com',
      phoneNumber: '1234',
      firstName: 'kanchan',
      lastName: 'chauhan',
      address: 'atlanta',
    },
    {
      email: 'adsfd@gmail.com',
      phoneNumber: '12345',
      firstName: 'banchan',
      lastName: 'hauhan',
      address: 'miami',
    },
    {
      email: 'fgh@gmail.com',
      phoneNumber: '1235',
      firstName: 'kanchan',
      lastName: 'hauhan',
      address: 'miami',
    }]

    console.log(checkDuplicates(accounts1), ' expect true');
    console.log(checkDuplicates(accounts2), ' expect false');
    console.log(checkDuplicates(accounts3), ' expect true');
    console.log(checkDuplicates(accounts4), ' expect false');