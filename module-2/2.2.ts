{
  // interface declaration and use case in  object

  interface User1 {
    name: string;
    age: number;
  }

  const user1: User1 = {
    name: "John",
    age: 24,
  };

  //  but we can not declare primitive value with interface because interface type start with {}

  // type extend with the help of interface

  interface UserWithRole extends User1 {
    role: string;
  }

  const UserWithRole2: UserWithRole = {
    name: "Tofayel",
    age: 32,
    role: "Admin",
  };

  //  we can convert type alias into interface

  type user4 = {
    name: string;
    age: number;
  };

  interface UserWithROle4 extends user4 {
    role: string; 
  }

//   we can user interface for declaring array because in Js array is a object. 

type Roll =  number []


const rollNumber: Roll = [1,2,3]


interface Roll4 {
    [index: number] : number;
}

const rollNumber4 : Roll4 = [1,2,3]

}
