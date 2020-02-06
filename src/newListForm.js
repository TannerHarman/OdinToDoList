import taskForm from './newTaskTemplate';

const listForm = /* template */ `
  <h4>New List</h4>

  <div>
    <label for="list-name">Name</label>
    <input id='list-name' type="text" name='list-name'>
  </div>

  <div>
    ${taskForm}
  </div>

  <button id='create-list'>Save List</button>
  <button id='cancel-list'>Cancel</button>
`;

export default listForm;
