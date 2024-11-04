{
  type GenericArray<T> = Array<T>;

  const RollArray: GenericArray<number> = [12, 13, 14];
  // const RollArray: number[] = [12, 13, 14];
  // const mentors: string[] = ["X", "Y", "Z"];
  // const mentors: string[] = ["X", "Y", "Z"];
  const mentors: GenericArray<string> = ["X", "Y", "Z"];

  // const BoolArray:boolean[] = [true, false, true]
  const BoolArray: GenericArray<boolean> = [true, false, true];

  const add = (X: number, Y: number) => X + Y;

  add(20, 30);

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "John", age: 23 },
    {
      name: "Tofayel",
      age: 30,
    },
  ];

  // Generic Tuple
  type GenericTuple<T, Y> = [T, Y];
  const user1: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];
  const userWithId: GenericTuple<number, {name:string, age: number}> = [123, { name: "Tofayel", age: 28 }];
}
