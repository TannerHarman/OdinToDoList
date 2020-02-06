import listForm from './newListForm';
import sideBarListTemplate from './sideBarListTemplate';

const guiModule = function(listGenerator, taskGenerator) {
  const newList = document.querySelector('#new-list');
  const mainDisplay = document.querySelector('main');

  newList.addEventListener('click', () => {
    const list = Object.seal(listGenerator());
    mainDisplay.innerHTML = listForm;

    const createList = document.querySelector('#create-list');
    const cancelList = document.querySelector('#cancel-list');
    const listNameInput = document.querySelector('#list-name');

    createList.addEventListener('click', () => {
      const lists = document.querySelector('#lists');
      list.setName(listNameInput.value);
      lists.innerHTML += sideBarListTemplate(list);

      mainDisplay.innerHTML = '';
    });

    cancelList.addEventListener('click', () => {
      mainDisplay.innerHTML = '';
    });
  });
};

export { guiModule };
