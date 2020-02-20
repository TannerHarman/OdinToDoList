function newList(nameInput = '') {
  let name = nameInput;
  const tasks = [];

  const setName = newName => {
    name = newName;
  };

  const addTasks = taskList => {
    tasks.push(taskList);
  };

  const returnList = () => ({
    name,
    tasks,
  });

  return {
    addTasks,
    setName,
    returnList,
  };
}

export default newList;
