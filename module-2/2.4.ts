{
//interface with generic 


interface Developer<T, Y= null> {
    name: string;
    computer : {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch : T;
    normalWatch ?: Y

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
    }, 
   

}


type AppleWatch = {brand: string;
    model: string;
    display : string;
    heartRate: number;
    batteryLife: number}


    interface NormalWatch {
        model: string;
        display: string;
    }

const RichDeveloper : Developer <AppleWatch, NormalWatch> = {
    name: "Jane",
    computer: {
        brand : "Apple",
        model: "MacBook Pro",
        releaseYear: 2023,
    },
    smartWatch: {
        brand: "samsung",
        model: "Galaxy Pro",
        display : "Smart display",
        heartRate: 2000,
        batteryLife: 7

    },
    normalWatch: {
        model: "Casio",
        display: "Smart Display"
    }
}

// even iof the smartWatch object carries different properties compare to poorDeveloper we can we Same Generic









}