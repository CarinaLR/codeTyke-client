import React from "react";
import axios from "axios";

const AllQuestions = () => {
  // state in our functional component, with React hooks, instead of having State.
  const [questions, setQuestions] = React.useState([]);

  const getQuestions = async () => {
    const { data } = await axios.get("/api/questions");
    setQuestions(data);
  };
  //We can use .useEffect(), instead of componentDidMount
  React.useEffect(() => {
    getQuestions();
  }, []);
  console.log("questions >>>", questions);

  return (
    <div>
      <h2>Questions</h2>
      <div>
        {questions.map((question) => (
          <div key={question.id}>
            <div>
              {question.body} {question.id}
            </div>
            <div>{question.instructions}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllQuestions;
