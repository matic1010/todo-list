import Project from './Project';
import Task from './Task';

export default class UI {
  constructor(todoList) {
    this.todoList = todoList;
  }

  render() {
    const contentContainer = document.getElementById('content');
    const projectList = this.generateProjects();
    const taskList = this.generateTasks();
    const taskInput = this.generatetTaskInput();
    contentContainer.appendChild(projectList);
    contentContainer.appendChild(taskList);
    contentContainer.appendChild(taskInput);
  }

  generateProjects() {
    const projectList = document.createElement('ul');
    const projectListElements = this.todoList.getProjects().map((project) => {
      const listElement = document.createElement('li');
      listElement.textContent = project.name;
      listElement.addEventListener('click', (e) => {
        // change current project to project with the name of selected list element
        const projectName = e.target.textContent;
        this.todoList.setSelectedProject(projectName);
        this.reload();
      });
      return listElement;
    });
    projectListElements.forEach((element) => {
      projectList.appendChild(element);
    });
    projectList.appendChild(this.generateNewProjectInput());
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

  generateNewProjectInput() {
    const projectInputDiv = document.createElement('div');
    const projectInput = document.createElement('input');
    projectInput.id = 'project-input';
    const addProjectButton = document.createElement('button');
    addProjectButton.innerHTML = '+ Add Project';
    addProjectButton.addEventListener('click', () => {
      const projectName = projectInput.value;
      if (projectName) {
        this.todoList.addProject(new Project(projectName));
        this.reload();
      }
    });

    projectInput.setAttribute('type', 'text');

    projectInputDiv.appendChild(projectInput);
    projectInputDiv.appendChild(addProjectButton);

    return projectInputDiv;
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
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
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
