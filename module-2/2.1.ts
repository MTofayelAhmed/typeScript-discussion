{
let anyThing : any ;
anyThing = "Next level Web Development";

(anyThing as string )


const kgToGm = (value : number | string | undefined )=> {
    if (typeof value === "number"){
        const convertedValue = value * 1000;
        return convertedValue;
    }

    if (typeof value === "string"){
        const parseValue = parseFloat(value)*1000;
        return parseValue
    }

}

kgToGm(1000 as number)
kgToGm("500" as string)







}