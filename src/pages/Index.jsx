import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack, HStack, IconButton, Spacer, Checkbox } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a todo" />
          <Button onClick={handleAddTodo} colorScheme="blue" px={8}>
            <FaPlus />
          </Button>
        </HStack>
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(index)} />
            <Text textDecoration={todo.completed ? "line-through" : "none"}>{todo.text}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} onClick={() => handleRemoveTodo(index)} variant="ghost" colorScheme="red" size="sm" />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
