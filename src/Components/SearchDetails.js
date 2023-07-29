import { useEffect, useRef, useState } from "react";
import { getSearchData } from "../Data/Db";
import { Stack, Card, Grid, Typography, Box } from "@mui/material";
import { useNavigate, generatePath } from "react-router-dom";
import { GestureDetector } from "react-onsenui";
import { setDbData } from "../Data/Db";

const SearchDetails = () => {
  const [todoData, setTodoData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setTodoData(getSearchData);
  }, []);

  const handleProceed = (e, index) => {
    e.preventDefault();
    navigate(generatePath("/Edit/:index", { index }));
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    if (id) {
      setInterval(() => {
        setTodoData((prevTodoData) => {
          const updatedTodoData = prevTodoData.filter((data) => data.id !== id);
          setDbData(updatedTodoData);
          return updatedTodoData;
        });
      }, 2000);
      navigate("/");
    }
  };

  const handleToggleBox = (e, index) => {
    e.stopPropagation();
    setTodoData((prevTodoData) =>
      prevTodoData.map((data, i) =>
        i === index ? { ...data, isOpen: !data.isOpen } : data
      )
    );
  };

  return (
    <Stack direction="row" justifyContent="center" mt="50px">
      <Card
        sx={{
          width: { sm: "40%", xs: "100%" },
          display: "flex",
          justifyContent: "center",
        }}
        elevation={10}
      >
        <Grid
          container
          sx={{ width: { xs: "90%", lg: "60%" } }}
          pt={5}
          pb={5}
          display="flex"
          flexDirection="column"
          alignContent="center"
        >
          {todoData?.length >= 1 ? (
            todoData.map((data, index) => {
              return (
                <Grid key={index} width="90%" textAlign="center" m={1}>
                  <GestureDetector
                    onDragLeft={(e) => handleDelete(e, data.id)}
                    onDragRight={(e) => handleProceed(e, index)}
                  >
                    <Typography
                      sx={{
                        border: "3px solid black",
                        borderRadius: "50px",
                        fontSize: "1em",
                        cursor: "pointer",
                      }}
                      p={1}
                      onClick={(e) => {
                        handleToggleBox(e, index);
                      }}
                    >
                      {data.title}
                      <span
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={(e) => handleProceed(e, index)}
                      >
                        ➤
                      </span>
                    </Typography>
                  </GestureDetector>
                  <Box sx={{ display: data.isOpen ? "block" : "none" }}>
                    <Typography sx={{ fontSize: "1em" }}>
                      {data?.description?.length > 150
                        ? data?.description?.substring(0, 150) + "..."
                        : data?.description}
                    </Typography>
                    <Typography
                      sx={{
                        color: data?.status === "Pending" ? "red" : "green",
                        fontSize: "1em",
                      }}
                    >
                      {data.status}
                    </Typography>
                  </Box>
                </Grid>
              );
            })
          ) : (
            <Typography variant="h5">Please create some Todo's</Typography>
          )}
        </Grid>
      </Card>
    </Stack>
  );
};

export default SearchDetails;
