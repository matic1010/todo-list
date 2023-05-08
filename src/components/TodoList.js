import Project from './Project';

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Default'));
    this.selectedProject = this.projects[0];
  }

  getProjects() {
    return this.projects;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getSelectedProject() {
    return this.selectedProject;
  }

  setSelectedProjec(name) {
    this.selectedProject = this.projects.find(
      (project) => project.name === name
    );
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }
}
