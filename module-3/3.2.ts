{
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;
    constructor( public name: string, public species: string, public sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    }
    makeSound() {
      console.log(`this ${this.name} is barking ${this.sound}`);
    }
  }

  const Dog = new Animal("German Dog", "Dog", "Ghew ghew");
  Dog.sound
}