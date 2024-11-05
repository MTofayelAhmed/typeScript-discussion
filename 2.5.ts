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








  
}
