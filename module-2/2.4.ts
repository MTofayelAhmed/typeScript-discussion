{
//interface with generic 


interface Developer<T> {
    name: string;
    computer : {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch : T

}

type Watch = {brand:string; model: string; display: string}

const poorDevelper : Developer <Watch>= {
    name: "John",
    computer: {
        brand: "Dell",
        model: "XPS",
        releaseYear: 2020
    },
    smartWatch: {
        brand: "Apple",
        model: "XCVV",
        display: "LED"
    }
}










}