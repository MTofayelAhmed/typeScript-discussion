{
  // asyncronous operations

  const createPromise = () : Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load Data");
      }
    });
  };

  const showData = async () => {
    const data: string = await createPromise();
    return data;
  };

  showData();
}
