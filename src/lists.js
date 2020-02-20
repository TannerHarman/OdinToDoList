import newList from './newListGenerator';
import newTask from './newTaskGenerator';

function listStorage(list) {
  const lists = [];

  const defaultLists = () => {
    const defaultTask = newTask(
      'Example Task',
      'This is where you put a slight description on the task at hand'
    );

    const defaultList = newList('Example List');
    defaultList.addTasks(defaultTask);
    lists.push(defaultList);
  };

  const addList = () => {
    lists.push(list);
  };

  defaultLists();

  return {
    addList,
    lists,
  };
}

export default listStorage;
