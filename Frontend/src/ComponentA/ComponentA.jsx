import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addDataApi } from "../Redux/Action";

const ComponentA = () => {
  const toast = useToast();
  const [name, namechange] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    //console.log(name);
    const userobj = { id: Date.now() + 1, title: name };
    //console.log(userobj)
    dispatch(addDataApi(userobj));
    toast({
      title: `Data is added to the server`,
      status: "success",
      position: "top",
      isClosable: true,
    });
    namechange("");
  };
  return (
    <Box textAlign={["center"]} p={["20px", "40px"]}>
      <Box>
        <Text fontSize={["3xl", "4xl"]} as="b" color="#e1ebfd">
          Todo App
        </Text>
      </Box>
      <form onSubmit={handlesubmit}>
        <Box mt={["20px", "40px"]}>
          <Input
            htmlSize={["58", "48", "38"]}
            width={["90%", "45%"]}
            bg="#e1ebfd"
            value={name}
            onChange={(e) => namechange(e.target.value)}
          />
          {"  "}
          <Button
            borderRadius={"50%"}
            bg="#271c6c"
            border="2px solid #e1ebfd"
            color={"#e1ebfd"}
            mt={"-8px"}
            _hover={{
              bg: "#271c6c",
              color: "#e1ebfd",
            }}
            type="submit"
          >
            <AddIcon />
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ComponentA;
