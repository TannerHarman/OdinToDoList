function taskList(task) {
  return /* template */ `
  <p>${task.name}</p>
  <p>${task.description}</p>
`;
}

export default taskList;
