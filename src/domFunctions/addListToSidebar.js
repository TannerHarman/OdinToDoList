import sideBarListTemplate from '../templateFunctions/sideBarListTemplate';
import mainDisplayController from './mainDisplayController';

function addListToSidebar(list) {
  const createList = document.querySelector('#create-list');
  const listNameInput = document.querySelector('#list-name');

  createList.addEventListener('click', () => {
    const lists = document.querySelector('#lists');
    list.setName(listNameInput.value);
    lists.innerHTML += sideBarListTemplate(list);

    mainDisplayController('');
  });
}

export default addListToSidebar;
