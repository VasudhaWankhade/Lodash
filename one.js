var _ = require('lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': '', 'age': 40, 'active': false },
    { 'user': 'Vasudha', 'age': 23, 'active': true },
    { 'user': 'Sanju', 'age': 23, 'active': false }
];

// _.filter()

// First way

let filter = _.filter(users, function(el) {
    return el.active
})
console.log(filter)

// Second Way

let filter1 = _.filter(users, { active: true, user: 'barney' })
console.log(filter1)

// Third Way

let filter2 = _.filter(users, ['age', 23])
console.log(filter2)

// Fourth way

let filter3 = _.filter(users, 'active')
console.log(filter3)

// _.sum()

let arrayOfNum = [12, 34, 5, 66, 6768, 78]
let addition = _.sum(arrayOfNum)
console.log(addition)

// _.sumBy()

let invoice = [{
        product: "audi",
        price: 1000,
        skills: 2
    },

    {
        product: "bmw",
        price: 2000,
        skills: 2
    },
    {
        product: "mercedes",
        price: 2000,
        skills: 2
    }

]

// add prices

let total = _.sumBy(invoice, 'price')
console.log(total)

// add skills

let skillsSum = _.sumBy(invoice, 'skills')
console.log(skillsSum)

// add prices greater than 1000

let sumUp = _.sumBy(invoice, (el) => el.price > 1000 ? el.price : null)
console.log(sumUp)

// _.pick()

let obj = {
    a: 1,
    b: 2,
    c: 3,
    eligible: true
}

let p = _.pick(obj, ['a', 'c'])
console.log(p)


// _.pickBy()

let e = _.pickBy(obj, _.isBoolean)
console.log(e)