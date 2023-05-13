import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  SimpleGrid,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { DeleteApi, UpdateApi, getDataApi } from "../Redux/Action";

const ComponentC = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [selectedBox, SetSelectedBox] = useState("");
  const [editMode, SetEditMode] = useState(false);

  const { data, loading } = useSelector((store) => store.Product);
  console.log("loading", loading);
  console.log("data", data);

  //useEfect
  useEffect(() => {
    dispatch(getDataApi());
  }, []);

  // edit
  const handleEdit = (el) => {
    SetSelectedBox(el);
    SetEditMode(true);
  };
  //
  const handleEditSubmit = () => {
    dispatch(UpdateApi(selectedBox, selectedBox._id));
    SetSelectedBox({ id: null, title: "" });
    SetEditMode(false);
    toast({
      title: `data is Updated in server`,
      status: "success",
      position: "top",
      isClosable: true,
    });
  };
  const handledelete = (id) => {
    dispatch(DeleteApi(id));
    toast({
      title: `data is deleted from server`,
      status: "success",
      position: "top",
      isClosable: true,
    });
  };

  return loading ? (
    <Center >
    <Box m={"auto"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
    </Center>
  ) : (
    <Box w="95%" m={"auto"}>
      <SimpleGrid columns={[1, 2, 4]} spacing={10}>
        {data &&
          data.map((el) => (
            <Box key={el._id} bg="#cdd2ee" p="20px" borderRadius={"10px"}>
              {/* if editmode is true and selectedBox.id===el.id is same then input box is visibile */}
              {editMode && selectedBox._id === el._id ? (
                <Input
                  value={selectedBox.title}
                  onChange={(e) =>
                    SetSelectedBox({ ...selectedBox, title: e.target.value })
                  }
                />
              ) : (
                <>
                  <Box>{el.title}</Box>
                  <br />
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      bg="#cdd2ee"
                      _hover={{ bg: "#cdd2ee" }}
                      onClick={() => handledelete(el._id)}
                    >
                      <DeleteIcon color="#e4002b" />
                    </Button>
                    <Button
                      bg="#cdd2ee"
                      _hover={{ bg: "#cdd2ee" }}
                      onClick={() => handleEdit(el)}
                    >
                      <EditIcon color="#77b631" />
                    </Button>
                  </Box>
                </>
              )}
              {/* if editmode is true and selectedBox.id===el.id is same then save button  is visibile */}
              {editMode && selectedBox._id === el._id && (
                <Button
                  bg="#77b631"
                  _hover={{ bg: "#77b631" }}
                  onClick={() => handleEditSubmit()}
                >
                  Save
                </Button>
              )}
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default ComponentC;
