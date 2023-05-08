export default class Task {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    this.completed = false;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(newDate) {
    this.dueDate = newDate;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
