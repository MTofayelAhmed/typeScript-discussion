{
// inheritence 
class Parents {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string){
        this.name = name ;
        this.age = age ;
        this.address = address;

    }
    getSleep(Hours: number){
           console.log(`${this.name} will have ${Hours}  Hours`)
        }
}




class Student  extends Parents{
   constructor(name: string, age: number, address: string){
    super(name, age, address)
   }
   }
    
const student1 = new Student("Tofayel", 25, "Germany")
student1.getSleep(10)

class Teacher extends Parents {
    
         designation: string;
        constructor(name: string, age: number, address: string, designation: string){
         super(name, age, address)
            this.designation = designation
    
        }
       

            takeClass (NumberOfClass: number){
                console.log(`Total class ${NumberOfClass}`)
            }
        }


        const Teacher1 = new Teacher ("Mr. X", 23, "Uganda", "teacher")

     
    
}













