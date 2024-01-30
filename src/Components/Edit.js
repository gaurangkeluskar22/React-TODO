import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setDbSearchResultsData, setDbData } from "../Data/Db";
import { getTodoDataByIndex, getTodoData } from "../Data/Db";
import {
  Card,
  Box,
  Stack,
  Grid,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  FormHelperText,
  Typography
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const Edit = () => {
  const { index } = useParams();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if(index) {
      setTodo(getTodoDataByIndex(index));
       setLoading(false);
    }
  }, []);

  useEffect(() => {
    setTodoData(getTodoData);
  }, []);

  const [todo, setTodo] = useState();
  const [todoData, setTodoData] = useState();
  const [isLoading,setLoading] = useState(true);
  const navigate = useNavigate();


  const onSubmit = (data) => {
    const todoInputData = {
      title: data.title,
      description: data.description,
      status: data.status,
    };
    todoData[index]=todoInputData;
    setDbData(todoData);
    alert("Todo has been edited!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" justifyContent="center" mt="50px">
        <Card
          sx={{
            width: { sm: "40%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
          }}
          elevation={10}
        >
            {isLoading ? 
                <Typography> 
                    Loading
                </Typography>
            :
          <Grid
            container
            sx={{ width: { xs: "90%", lg: "60%" } }}
            pt={5}
            pb={5}
          >
            <Grid item xs={12}>
              <div>Todo Name :</div>
              <FormControl
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "14px",
                  },
                }}
              >
                <Controller
                  name="title"
                  control={control}
                  defaultValue={todo?.title}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Enter todo title"
                      size="small"
                      required
                      maxLength={2}
                      autoComplete="off"
                      inputProps={{
                        maxLength: 30,
                        minLength: 10,
                      }}
                      rules={{
                        required: "Please enter Todo title",
                        maxLength: {
                          value: 30,
                          message: "Maximum character length is 30",
                        },
                        minLength: {
                          value: 10,
                          message: "Minimum character length is 10",
                        },
                        validate: (value) => {
                          if (value.trim() === "") {
                            return "Please Enter Title";
                          }
                          return true;
                        },
                      }}
                    />
                  )}
                />
              </FormControl>
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {errors.title && errors.title.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} mt={2}>
              <div>Todo Description:</div>

              <FormControl
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "14px",
                  },
                }}
              >
                <Controller
                  name="description"
                  control={control}
                  defaultValue={todo?.description}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Enter todo Description"
                      size="large"
                      required
                      multiline
                      rows={3}
                      autoComplete="off"
                      inputProps={{
                        maxLength: 100,
                        minLength: 10,
                      }}
                      rules={{
                        required: "Please enter Todo description",
                        maxLength: {
                          value: 30,
                          message: "Maximum character length is 100",
                        },
                        minLength: {
                          value: 10,
                          message: "Minimum character length is 10",
                        },
                        validate: (value) => {
                          if (value.trim() === "") {
                            return "Please Enter Description";
                          }
                          return true;
                        },
                      }}
                    />
                  )}
                />
              </FormControl>
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {errors.description && errors.description.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} mt={2}>
              <div>Todo Status:</div>
              <FormControl sx={{ width: "100%" }}>
                <Controller
                  name="status"
                  control={control}
                  defaultValue={todo?.status}
                  render={({ field }) => (
                    <Select required {...field}>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {errors.status && errors.status.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Button
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                sx={{ width: "100%" }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
}
        </Card>
      </Stack>
    </form>
  );
};

export default Edit;
