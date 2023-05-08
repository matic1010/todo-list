import TodoList from './components/TodoList';
import Project from './components/Project';
import Task from './components/Task';
import UI from './components/UI';

const todo = new TodoList();
todo.addProject(new Project('Custom Project'));
todo.getSelectedProject().addTask(new Task('Test', 'today'));
const userInterface = new UI(todo);

userInterface.render();
