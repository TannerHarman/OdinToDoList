function newList(nameInput = '') {
  let listName = nameInput;
  const tasks = [];

  const getName = () => listName;

  const getTasks = () => tasks;

  const setName = newName => {
    listName = newName;
  };

  const addTasks = taskList => {
    tasks.push(taskList);
  };

  return {
    getName,
    getTasks,
    addTasks,
    setName,
  };
}

export default newList;
