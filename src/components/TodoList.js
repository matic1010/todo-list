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

  setSelectedProject(name) {
    this.selectedProject = this.projects.find(
      (project) => project.name === name
    );
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }

  findProject(name) {
    const foundProject = this.projects.find((project) => (project.name = name));
    return foundProject;
  }
}
