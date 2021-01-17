import { useState } from "react";
import User from "./User";

const Users = ({ data, setData, input1, setInput }) => {
  // console.log(data);

  const [filteredData, setFilteredData] = useState({
    name: "",
    Age: 0,
    Occupation: "",
  });

  const InputHandler = (e) => {
    const element = e.target.value;
    const number = parseInt(element);
    // setInput(element);
    const myData = data.filter((fitter) => fitter.Age === number);
    setFilteredData(myData[0]);
    //   console.log(myData);
  };

  return (
    <div>
      <input onChange={InputHandler} type="text" name="Age" id="" />
      <h1>Users</h1>
      {filteredData && <User filteredData={filteredData} />}
    </div>
  );
};

export default Users;
