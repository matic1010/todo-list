import Task from './Task';

export default class UI {
  constructor(todoList) {
    this.todoList = todoList;
  }

  render() {
    const app = document.getElementById('app');
    const projectList = this.generateProjects();
    const taskList = this.generateTasks();
    const taskInput = this.generatetTaskInput();
    app.appendChild(projectList);
    app.appendChild(taskList);
    app.appendChild(taskInput);
  }

  generateProjects() {
    const projectList = document.createElement('ul');
    const projectListElements = this.todoList.getProjects().map((project) => {
      const listElement = document.createElement('li');
      listElement.textContent = project.name;
      return listElement;
    });
    projectListElements.forEach((element) => {
      projectList.appendChild(element);
    });
    return projectList;
  }

  generateTasks() {
    const taskList = document.createElement('ul');
    const tasks = this.todoList.getSelectedProject().getTasks();
    const taskListElements = tasks.map((task) => {
      const listElement = document.createElement('li');
      listElement.textContent = task.name;
      return listElement;
    });
    taskListElements.forEach((element) => {
      taskList.appendChild(element);
    });
    return taskList;
  }

  generatetTaskInput() {
    const taskInputDiv = document.createElement('div');
    const taskInput = document.createElement('input');
    taskInput.id = 'task-input';
    const addTaskButton = document.createElement('button');
    addTaskButton.innerHTML = 'Add New Task';
    addTaskButton.addEventListener('click', () => {
      const taskName = taskInput.value;
      if (taskName) {
        this.todoList.getSelectedProject().addTask(new Task(taskName, 'today'));
        this.reload();
      }
    });
    taskInput.setAttribute('type', 'text');

    taskInputDiv.appendChild(taskInput);
    taskInputDiv.appendChild(addTaskButton);

    return taskInputDiv;
  }

  reload() {
    const app = document.getElementById('app');
    app.innerHTML = '';
    this.render();
  }
}
// const appContainer = document.getElementById('app');

// const generateTaskInput = () => {
//   const taskInputDiv = document.createElement('div');
//   const taskInput = document.createElement('input');
//   taskInput.id = 'task-input';
//   const addTaskButton = document.createElement('button');
//   addTaskButton.innerHTML = 'Add New Task';
//   addTaskButton.addEventListener('click', () => handleNewTaskButton());
//   taskInput.setAttribute('type', 'text');

//   taskInputDiv.appendChild(taskInput);
//   taskInputDiv.appendChild(addTaskButton);

//   return taskInputDiv;
// };

// const handleNewTaskButton = () => {
//   const input = document.getElementById('task-input');
//   if (input.value) {
//     todo.addTask(input.value, 'today');
//   }
// };

// const generateProjectList = (projects) => {
//   const projectList = document.createElement('ul');
//   const projectListElements = projects.map((project) => {
//     const listElement = document.createElement('li');
//     listElement.textContent = project.name;
//     return listElement;
//   });
//   projectListElements.forEach((element) => {
//     projectList.appendChild(element);
//   });
//   return projectList;
// };

// const generateTaskList = (tasks) => {
//   const taskList = document.createElement('ul');
//   const taskListElements = tasks.map((task) => {
//     const listElement = document.createElement('li');
//     listElement.textContent = task.name;
//     return listElement;
//   });
//   taskListElements.forEach((element) => {
//     taskList.appendChild(element);
//   });
//   return taskList;
// };

// const renderPage = (todoList) => {
//   appContainer.appendChild(generateTaskInput());
//   appContainer.appendChild(generateProjectList(todoList.getProjects()));
//   appContainer.appendChild(
//     generateTaskList(todoList.getSelectedProject().getTasks())
//   );
// };

// export { renderPage };
