const customers = [
  {
    name: "Tim V Smith",
    age: 20, 
    items: ['sneakers', 'video game console'],
    paid: 14500, // Private
    year: 2004,
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

const [ { address: address1 }, { address: address2 } ] = customers // global
// above

// const person1Address = customers[0].address
// const person2Address = customers[1].address

const [ { address: { street: street1 } }, { address: { street: street2 } } ] = customers

console.log('Address: ', address1, address2, street1, street2)

// [p1, p2]

// var g = [{ name: 'Chad', age: 25 }, { name: 'Sam', age: 23 }]

// g[1].age // age 23