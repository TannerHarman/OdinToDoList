import mainDisplay from './mainDisplayController';

function cancelList() {
  const cancelButton = document.querySelector('#cancel-list');

  cancelButton.addEventListener('click', () => {
    mainDisplay('');
  });
}

export default cancelList;
