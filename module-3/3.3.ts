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
    



class Teacher {
    
        name: string;
        age: number;
        address: string;
        designation: string;
        constructor(name: string, age: number, address: string){
            this.name = name ;
            this.age = age ;
            this.address = address;
    
        }
        getSleep(Hours: number){
               console.log(`${this.name} will have ${Hours}  Hours`)
            }

            takeClass (NumberOfClass: number){
                console.log(`Total class ${NumberOfClass}`)
            }
        }

     
    
}













}