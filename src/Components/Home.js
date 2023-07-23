import { useEffect, useState } from "react";
import { getTodoData } from "../Data/Db";

const Home = () => {
  useEffect(() => {
    setTodoData(getTodoData);
  }, []);

  const [todoData, setTodoData] = useState({});
  console.log("TODO DATA:", todoData);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          {todoData?.length > 0 &&
            todoData?.map((data, index) => {
              return (
                <div>
                  {data.title}
                  <div></div>
                </div>
              );
            })}
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
};

export default Home;
