{
  // generic with Function

  const createArray = (param: string) => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T) => {
    return [param];
  };

  const stringGeneric = createArrayWithGeneric<string>("Bangladesh");

  const numberGeneric = createArrayWithGeneric<number>(2222);
  const booleanGeneric = createArrayWithGeneric<boolean>(true);

  type User = { id: number; name: string };

  const objectGeneric = createArrayWithGeneric<User>({
    id: 222,
    name: "Bangladesh",
  });

  //   Generic withTuple in Function

  const createArrayWithTuple = <T, Y>(param1: T, param2: Y) => {
    return [param1, param2];
  };
  const resultNumber = createArrayWithTuple<number, number>(10, 29);
  const resultMix = createArrayWithTuple<string, { id: number; name: string }>(
    "Germany",
    {
      id: 111,
      name: "Bangladesh",
    }
  );

  const AddCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return { course, ...student };
  };

  const student1 = AddCourseToStudent<{
    id: number;
    name: string;
    email: string;
  }>({ id: 1, name: "Tofayel Ahmed", email: "tofayelAhmed@gmail.com" });

const student2 = AddCourseToStudent<{id: number; email: string; experience: "string"}>({id: 33, email: "@gmail.com", expericence: "2 years"})


}
