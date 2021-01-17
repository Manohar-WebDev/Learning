const User = ({ filteredData }) => {
  //console.log(data[0]);
  return (
    <div>
      <h1>{`Name : ${filteredData.name}`}</h1>
      <h2>{`Age : ${filteredData.Age}`}</h2>
      <h3>{`Occupation : ${filteredData.Occupation}`}</h3>
    </div>
  );
};

export default User;
