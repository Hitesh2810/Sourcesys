function welcome(u){
    return "Welcome " + u
}

console.log(welcome("Hitesh"))

let v = [3,6,9,12,15]

for(let i=0;i<v.length;i++){
    console.log(v[i])
}

let db = v.map(v => v * 2)
console.log(db)

let filtered = v.filter(v => v > 8)
console.log(filtered)

function createProfile(name, age){
    return {
        name: name,
        age: age,
        info: function(){
            return this.name + " is " + this.age
        }
    }
}

let p1 = createProfile("Keerthi",21)
let p2 = createProfile("Hitesh",22)

console.log(p1.name)
console.log(p1.info())

console.log(p2.name)
console.log(p2.info())

let now = new Date()
console.log(now.toDateString())

console.log(Math.random())
console.log(Math.sqrt(36))