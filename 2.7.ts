{
// generic constraints with key of operator    


type Vehicle = {
    bike : string;
    car: string;
    ship: string;
}


type Owner = "bike"| "car"| "ship"; 


type Owner2 = keyof  Vehicle


const user = {
    name: "Mr. Persian",
    age: 20,
    email: "@gmail.com" 

}

const car = {
    brand: "Toyota",
    model: 2020
}

const getPropertyValue =<X,Y extends keyof X> (object: X, key: Y )=> {
    return object[key]
}

const result1 = getPropertyValue(user, "name")
const result2 = getPropertyValue(car, "model")

}