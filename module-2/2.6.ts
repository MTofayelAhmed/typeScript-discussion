{
  //

  const AddCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return { course, ...student };
  };

  const student4 = AddCourseToStudent({ id: 1, name: "Mr. X", email: "@gmail.com" });

  const student1 = AddCourseToStudent<{
    id: number;
    name: string;
    email: string;
  }>({ id: 1, name: "Tofayel Ahmed", email: "tofayelAhmed@gmail.com" });

  const student2 = AddCourseToStudent<{
    id: number;
    email: string;
    name: string;
    experience: string;
  }>({ id: 33, email: "@gmail.com", name: "Tofayel", experience: "2 years" });

  //
}
