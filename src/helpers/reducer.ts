export const reducer = (prev: string, action: { name: string }) => {
  switch (action.name) {
    case "Andri Firmansyah":
      return "Andri Firmansyah";
    case "John Doe":
      return "John Doe";
    case "Budi":
      return "Budi";
    case "":
      return "";
    default:
      throw new Error("Unknown name");
  }
};
