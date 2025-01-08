import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    const createdPost = postsService.create(post);

    expect(createdPost).toHaveProperty('id');
    expect(createdPost).toHaveProperty('date');
    expect(createdPost.text).toBe(post.text);
    expect(postsService['posts']).toHaveLength(2);
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const createdPost = postsService.create(post);
    const foundPost = postsService.find(createdPost.id);

    expect(foundPost).toBeDefined();
    expect(foundPost).toHaveProperty('id', createdPost.id);
    expect(foundPost).toHaveProperty('text', post.text);
  });
});