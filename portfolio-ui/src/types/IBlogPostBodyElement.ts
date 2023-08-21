export interface IBlogPostBodyElement {
  type: 'subheading' | 'p' | 'img' | 'code' | 'ul' | 'li';
  content: string | Array<IBlogPostBodyElement>;
}
