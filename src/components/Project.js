export default class Project {
  constructor(projectName) {
    this.name = projectName;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }
}
