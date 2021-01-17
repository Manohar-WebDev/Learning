import { v4 as uuidv4 } from "uuid";

export const Data = () => {
  return [
    {
      id: uuidv4(),
      name: "Rajesh",
      Age: 35,
      Occupation: "Software Engineer",
    },

    {
      id: uuidv4(),
      name: "Manohar",
      Age: 31,
      Occupation: "Telecom Engineer",
    },
  ];
};
