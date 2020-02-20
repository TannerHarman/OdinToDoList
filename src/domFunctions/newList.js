import listForm from '../templateFunctions/newListForm';
import cancelList from './cancelList';
import addListToSidebar from './addListToSidebar';
import addTask from './addTask';
import mainDisplayController from './mainDisplayController';

function newList(listGenerator, taskGenerator, masterList) {
  const newListInput = document.querySelector('#new-list');

  newListInput.addEventListener('click', () => {
    const list = Object.seal(listGenerator());
    mainDisplayController(listForm);

    addListToSidebar(list, masterList);
    cancelList();
    addTask(list, taskGenerator);
  });
}

export default newList;
