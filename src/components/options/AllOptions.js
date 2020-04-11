import React from "react";
import axios from "axios";

const AllOptions = () => {
  // state in our functional component, with React hooks, instead of having State.
  const [options, setOptions] = React.useState([]);

  const getOptions = async () => {
    const { data } = await axios.get("/api/options");
    setOptions(data);
  };
  //We can use .useEffect(), instead of componentDidMount
  React.useEffect(() => {
    getOptions();
  }, []);
  console.log("options >>>", options);

  return (
    <div>
      <h2>Options</h2>
      <div>
        {options.map((options) => (
          <div key={options.id}>
            <div>
              {options.body} {options.id}
            </div>
            <div>{options.imageUrl}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOptions;
