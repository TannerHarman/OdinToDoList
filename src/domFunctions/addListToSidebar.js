import sideBarListTemplate from '../templateFunctions/sideBarListTemplate';
import mainDisplayController from './mainDisplayController';

function addListToSidebar(list, masterList) {
  const createList = document.querySelector('#create-list');
  const listNameInput = document.querySelector('#list-name');
  const listStorage = masterList;

  createList.addEventListener('click', () => {
    list.setName(listNameInput.value);
    listStorage.push(list);
    localStorage.setItem('lists', JSON.stringify(listStorage));

    const lists = document.querySelector('#lists');
    lists.innerHTML += sideBarListTemplate(list);

    mainDisplayController('');
  });
}

export default addListToSidebar;
