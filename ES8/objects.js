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
const userIdSymbol = Symbol.for('userid'); //uses Global Symbol Registry
let uid = 1;
function makeUser(name, surname) {
    return {
        [userIdSymbol]: uid++,
        name: name,
        surname: surname,
        age: 'medium',
        print: function() {
            console.log(`Name is ${this.name}`);
        },
        setName(name) {
            this.name = name;
        },
        [Symbol.toPrimitive](hint) { //doesn't work
            if(hint == 'string') {
                return `User: name=${this.name}, surname=${this.surname}`;
            }

            return "Can't convert";
        }
    }
}

let user = makeUser('John', 'Smith');
user.print();

const clone = Object.assign({}, user);
clone.print();

delete clone.surname;
clone.setName('Jack');

//clone.name is equivalent to clone['name']

for(let prop in clone) {
    console.log(prop + '=' + clone[prop]);
}

console.log(`Cloned user id=${clone[userIdSymbol]}`);
console.log(user);

//objects are garbage collected when there is no reference to them from the root of engine (VM)