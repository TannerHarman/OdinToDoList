import listStorage from './lists';
import newList from './domFunctions/newList';

const guiModule = function(listGenerator, taskGenerator) {
  const defaultLists = [];

  defaultLists.push(listStorage().lists[0].returnList());
  localStorage.setItem('lists', JSON.stringify(defaultLists));

  console.log(defaultLists);

  newList(listGenerator, taskGenerator, defaultLists);
};

export { guiModule };
