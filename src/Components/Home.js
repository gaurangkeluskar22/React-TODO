import { useEffect, useRef, useState } from "react";
import { getTodoData } from "../Data/Db";

const Home = () => {
  useEffect(() => {
    setTodoData(getTodoData);
  }, []);

  const [todoData, setTodoData] = useState({});
  const ref = useRef("null");
  console.log("TODO DATA:", todoData);

  const handleClickTitle=()=>{
    console.log("yes");
    console.log(ref);
    ref.current.style.display="block";
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <div className="card card-body mt-5">
            {todoData?.length >= 1 ? (
              todoData?.map((data, index) => {
                return (
                  <div>
                    <div onClick={handleClickTitle}>{data.title}</div>
                    <div ref={ref} style={{display:"none"}}>
                        <div>{data.description}</div>
                        <div>{data.status}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3 className="text-center">Please create some Todo's</h3>
            )}
          </div>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
};

export default Home;
