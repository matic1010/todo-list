import TodoList from './components/TodoList';
import Project from './components/Project';
import Task from './components/Task';
import UI from './components/UI';

const todo = new TodoList();
const userInterface = new UI(todo);

userInterface.render();
