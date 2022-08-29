var _ = require('lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'vasudha', 'age': 23, 'active': false },
    { 'user': 'namu', 'age': 25, 'active': false },
    { 'user': 'sanju', 'age': 23, 'active': true },
    { 'user': 'mamata', 'age': 40, 'active': true }
];

// 1) _.filter() ==> to filter out the elements, most efficient in case of objects

// filter users whose age >= 25

let age = _.filter(users, (el) => el.age >= 25)
console.log(age)

// filter those users whose active value is true

let active = _.filter(users, { active: true })
console.log(active)

//2) _.sumBy() ==> to get sum of values of properties of object

// sum ages of all users

let sum = _.sumBy(users, 'age')
console.log(sum)

// 3) _.sum() ==> To get sum of provided elements

let arr = [112, 3, 43, 54, 5, 67, 87]
let addition = _.sum(arr)
console.log(addition)

// 4) _.pick() ==> pick elements on the basis of their properties

let obj = {
    firstName: "Vasudha",
    lastName: "Wankhade",
    rollNo: 25,
    age: 23,
    active: true
}
let a = _.pick(obj, ['firstName', 'lastName'])
console.log(a)

// 5) _.pickBy()  ==> pick elements on the basis of their of their data types

let str = _.pickBy(obj, _.isString)
console.log(str)

let boolean = _.pickBy(obj, _.isBoolean)
console.log(boolean)

// 6) _.clone()  ==> refer to same memory

let obj1 = {
    firstName: "Vasudha",
    lastName: "Wankhade",
    age: 25
}

let obj2 = _.clone(obj1)
console.log(obj2.firstName === obj1.firstName)

// 7) _.cloneDeep() ==> create different memory

let obj3 = [{
        myName: 'Vasudha',
        myCity: "Amravati"
    },
    {
        myName: "Sanju",
        myCity: "Mumbai"
    }
]

let obj4 = _.cloneDeep(obj3)
console.log(obj4[0] === obj3[0]) // because of different memory address

// 8)_.groupBy()  ==> can be used in array or object to classify elements on  basis of some conditions or values

let ab = ["Hello", "Bye", "Good", "Hii", "Happy"]
let ba = _.groupBy(ab, 'length')
console.log(ba)

let obj6 = [{
        user: "Vasudha",
        skills: 10
    },
    {
        user: "Mamata",
        skills: 6
    },
    {
        user: "Sanju",
    }
]

let six = _.groupBy(obj6, (el) => el.skills)
console.log(six)

let floor = _.groupBy([1.2, 1.5, 2.5, 2.3, 5.9], Math.floor)
console.log(floor)

let userss = [
    { name: "chinmay", age: 33, skill: "python" },
    { name: "amol", age: 25, skill: "javascript" },
    { name: "krishna", age: 33, skill: "javascript" },
    { name: "poorva", age: 25, skill: "python" },
    { name: "shivani", age: 27, skill: "python" }

]

let ages = _.groupBy(userss, (el) => el.age)
console.log(ages)

// 9) _.round() ==> will round off the value

let d = _.round(4.56789, 2)
console.log(d)

let e = _.round(232434678, -3)
console.log(e)

// 10) _.find()  ==> will give first element satisfying the condition

let arrA = [2, 3, 24, 34, 345, 4, 54, 65, 656, 76]

let f = _.find(arrA, (el) => el > 25)
console.log(f)