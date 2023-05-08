import Project from './Project';
import Task from './Task';
import '../style.css';

export default class UI {
  constructor(todoList) {
    this.todoList = todoList;
  }

  render() {
    const sidebar = document.querySelector('.sidebar');
    const taskContainer = document.querySelector('.task-view');
    const projectList = this.generateProjects();
    const taskList = this.generateTasks();
    const taskInput = this.generateTaskInput();

    sidebar.appendChild(projectList);
    taskContainer.appendChild(taskList);
    taskContainer.appendChild(taskInput);
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
    const taskListElements = tasks.map((task) => this.generateTask(task));
    taskListElements.forEach((element) => {
      taskList.appendChild(element);
    });
    return taskList;
  }

  generateTask(task) {
    const taskElement = document.createElement('li');
    if (task.completed) {
      taskElement.classList.add('completed');
    }
    taskElement.textContent = task.name;
    taskElement.addEventListener('click', () => {
      const taskToToggle = task;
      taskToToggle.toggleCompleted();
      this.reload();
    });
    return taskElement;
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
        const newProject = new Project(projectName);
        this.todoList.addProject(newProject);
        this.todoList.setSelectedProject(newProject.getName());
        this.reload();
      }
    });

    projectInput.setAttribute('type', 'text');

    projectInputDiv.appendChild(projectInput);
    projectInputDiv.appendChild(addProjectButton);

    return projectInputDiv;
  }

  generateTaskInput() {
    const taskInputDiv = document.createElement('div');
    const taskInput = document.createElement('input');
    taskInput.id = 'task-input';
    const addTaskButton = document.createElement('button');
    addTaskButton.innerHTML = 'Add New Task';
    addTaskButton.addEventListener('click', () => {
      const taskName = taskInput.value;
      if (taskName) {
        const taskToAdd = new Task(taskName, 'today');
        this.todoList.getSelectedProject().addTask(taskToAdd);
        if (this.todoList.getSelectedProject().getName() !== 'Default') {
          this.todoList.findProject('Default').addTask(taskToAdd);
        }
        this.reload();
      }
    });
    taskInput.setAttribute('type', 'text');

    taskInputDiv.appendChild(taskInput);
    taskInputDiv.appendChild(addTaskButton);

    return taskInputDiv;
  }

  reload() {
    const taskContainer = document.querySelector('.task-view');
    const sidebar = document.querySelector('.sidebar');
    taskContainer.innerHTML = '';
    sidebar.innerHTML = '';
    this.render();
  }
}
