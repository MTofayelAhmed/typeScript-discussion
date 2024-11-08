{
  // type narrowing or type guard

  const add = (
    param1: number | string,
    param2: number | string
  ): number | string => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };


// in Guard use in object . in guard always use in object 

type NormalUSer = {
    name: string;
}
type AdminUser = {
    name: string;
    role: string
}



const getUser = (user: NormalUSer | AdminUser)=> {
    if("role" in user ){
        
            console.log (`this is a ${user.role}`)
        
    }
    else {
       
            console.log(`this is Normal user . his name is ${user.name}`)
        
    }
}

const user1: NormalUSer = {
    name: "John"
}
const user2: AdminUser = {
    name: "Tofayel",
    role: "Admin"
}


getUser(user1)

}
