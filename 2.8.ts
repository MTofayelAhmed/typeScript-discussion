{

    // asyncronous operations 

    const createPromise = ()=> {
        return new Promise((resolve, reject)=> {
            const data : string = "something";
            if(data){
                resolve(data)
            }
            else {
                reject ("Failed to load Data")
            }
        })
    }












}