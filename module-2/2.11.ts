{
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

//   pick utility 

  type Name = Pick<Person, "name">;

  type NameAge = Pick<Person, "name" | "age">;
// Omit Utility 

type ContactInfo = Omit <Person , "name"| "age">


// required Utility 
type PersonRequired = Required <Person>
// partial utility 
type PersonPartial = Partial <Person>;





}
