import taskList from '../templateFunctions/taskListTemplate';

function addTask(list, taskGenerator) {
  const newTaskButton = document.querySelector('#add-task');
  const tasks = document.querySelector('#tasks');

  newTaskButton.addEventListener('click', () => {
    const taskName = document.querySelector('#task-name');
    const taskDescription = document.querySelector('#task-description');
    const newTask = taskGenerator(taskName.value, taskDescription.value);

    list.addTasks(newTask);
    tasks.innerHTML += taskList(newTask);
  });
}

export default addTask;
