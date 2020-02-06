function newList(nameInput = 't') {
  let listName = nameInput;
  let tasks = [];

  const getName = () => listName;

  const getTasks = () => tasks;

  const setName = newName => {
    listName = newName;
  };

  const addtasks = taskList => {
    tasks = taskList;
  };

  return {
    getName,
    getTasks,
    addtasks,
    setName,
  };
}

export default newList;
