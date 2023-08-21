export interface IProject {
  id: number;
  association: string;
  title: string;
  description: string;
  myContributions: Array<string>;
  techStack: Array<string>;
  languages: Array<string>;
  other: Array<string>;
}
