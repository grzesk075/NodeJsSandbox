//older approach

function Cat(name) {
    this.name = name;
}

Cat.prototype.print = function() {
    console.log('Cat ' + this.name + ' is ' + this.color);
}

Cat.prototype.color = 'black';

var cat = new Cat('Pussy');
cat.print();

//newer approach
function makeUser(name, surname) {
    return {
        name: name,
        surname: surname,
        age: 'medium',
        print: function() {
            console.log(`Name is ${this.name}`);
        }
    }
}

let user = makeUser('John', 'Smith');
user.print();

const clone = Object.assign({}, user);
clone.print();

delete clone.surname;

//clone.name is equivalent to clone['name']

for(let prop in clone) {
    console.log(prop + '=' + clone[prop]);
}

//objects are garbage collected when there is no reference to them from the root of engine (VM)