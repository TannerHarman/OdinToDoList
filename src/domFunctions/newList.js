import listForm from '../templateFunctions/newListForm';
import cancelList from './cancelList';
import addListToSidebar from './addListToSidebar';
import addTask from './addTask';
import mainDisplayController from './mainDisplayController';

function newList(listGenerator, taskGenerator) {
  const newList = document.querySelector('#new-list');

  newList.addEventListener('click', () => {
    const list = Object.seal(listGenerator());
    mainDisplayController(listForm);

    addListToSidebar(list);
    cancelList();
    addTask(list, taskGenerator);
  });
}

export default newList;
