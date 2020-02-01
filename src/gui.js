import listForm from './newListGui';

const guiModule = function() {
  const newList = document.querySelector('#new-list');
  const mainDisplay = document.querySelector('main');

  newList.addEventListener('click', () => {
    mainDisplay.innerHTML = listForm;

    const createList = document.querySelector('#create-list');
    createList.addEventListener('click', () => {
      console.log('Created List!!');
    });
  });
};

export { guiModule };
