import { IBlogPostBodyElement } from './IBlogPostBodyElement';

export interface IBlogPost {
  id: number;
  title: string;
  description: string;
  body: Array<IBlogPostBodyElement>;
}
