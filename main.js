const customers = [
  {
    name: "Tim V",
    age: 20, 
    items: ['sneakers', 'video game console'],
    paid: 14500, // Private
    address: {
      street: '1 Baked St',
      code: '1000',
      suburb: 'Parks',
      city: 'Sommerset'
    } 
  },
  {
    name: "Jade F",
    age:  22,
    items: ['camera', 'handbag'],
    paid: 2000,
    address: {
      street: '24 Flood Rd',
      code: 3422,
      suburb: 'Mittberg',
      city: 'Cape Town'
    }
  }
]

const [ { address: address1 }, { address: address2 } ] = customers
const [ { address: { street: street1 }, address: { street: street2 } } ] = customers

console.log('Address: ', street1, street2, address1, address2)