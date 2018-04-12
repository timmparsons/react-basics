var fullName = "Tim Parsons";
let firstName;
if(fullName) {
    let firstName = fullName.split(" ");
    console.log(firstName);
}

console.log(firstName);
const getFirstName = (fullName) => fullName.split(" ")[0];

const multiplier = {
    numbers: [1,2,3],
multiplyBy(x) {
    return this.numbers.map((number) => this.number * x);
    }
};