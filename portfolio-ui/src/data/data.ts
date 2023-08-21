import * as blogPostsApi from './blogPost/blogPostsApi';
import * as projectsApi from './projectsApi';

export namespace Data {
  export import blogPosts = blogPostsApi;
  export import projects = projectsApi;
}
