import newTask from './newTaskGenerator';
import newList from './newListGenerator';
import { guiModule } from './gui.js';

guiModule(newList, newTask);
