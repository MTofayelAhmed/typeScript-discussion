{

// conditional Type 
type A = number;
type B = undefined ;


type x = A extends null ? true : false

type z = A extends null ? true : B extends undefined ? undefined : any 








}