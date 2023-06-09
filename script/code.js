function Person(name,surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

let person1 = new Person('Zia','Khan',20);
let person2 = new Person('Justin','Scholtz',50);
let person3 = new Person('Jason','Viljoen',34);
let person4 = new Person('Rabia','Haucha',);
let person5 = new Person('Summer','De Wet',18);

let newArray = [person1,person2,person3,person4,person5]

localStorage.setItem('details', JSON.stringify(newArray))
// localStorage.setItem('details', JSON.stringify(newArray))
// localStorage.setItem('details', JSON.stringify(newArray))
// localStorage.setItem('details', JSON.stringify(newArray))
// localStorage.setItem('details', JSON.stringify(newArray))

