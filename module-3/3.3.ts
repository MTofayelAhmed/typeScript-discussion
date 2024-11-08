{
// inheritence 

class Student {
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






class Teacher {
    
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

            takeClass (NumberOfClass: number){
                console.log(`Total class ${NumberOfClass}`)
            }
        }

     
    
}













}