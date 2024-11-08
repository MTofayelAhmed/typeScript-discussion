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
}
