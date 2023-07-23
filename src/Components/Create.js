import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setDbSearchResultsData, setDbData } from "../Data/Db";
import { getTodoData } from "../Data/Db";

const Create = () => {
  useEffect(() => {
    setTodoData(getTodoData);
  }, []);

  const [todoInputData, setTodoInputData] = useState();
  const [todoData, setTodoData] = useState();
  const navigate = useNavigate();

  const getTodoInputData = (e) => {
    setTodoInputData({ ...todoInputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data after fetching:", todoData);
    console.log("enterred data:", todoInputData);
    todoData.push(todoInputData);
    console.log("updated tododata:", todoData);
    setDbData(todoData);
    alert("Todo has been created!");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form className=" mx-auto mt-5">
            <div className="form-group m-1">
              <label for="exampleInputTitle1" className="">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="todoTitle"
                placeholder="Enter Title"
                name="title"
                onChange={getTodoInputData}
              />
            </div>
            <div className="form-group m-1">
              <label for="exampleInputDescription1">Description</label>
              <textarea
                type="text"
                className="form-control"
                id="todoDescription"
                placeholder="Enter Description"
                name="description"
                onChange={getTodoInputData}
              />
            </div>
            <div className="form-group m-1">
              <label for="exampleInputStatus1">Status</label>
              <select
                className="form-select"
                name="status"
                onChange={getTodoInputData}
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary m-1 w-100"
              onClick={handleSubmit}
            >
              Create
            </button>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
};

export default Create;
