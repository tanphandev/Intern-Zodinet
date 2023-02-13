import { Injectable } from '@nestjs/common';
import { CreatePostDto } from 'src/posts/dtos/CreatePost.dto';
import { readFileSync, writeFileSync } from 'fs';

@Injectable()
export class PostService {
  private filePath = './src/posts/database/db.json';
  private posts = JSON.parse(readFileSync(this.filePath, 'utf-8'));

  findPostById(id: number) {
    return this.posts.find((user) => user.id === id);
  }

  getPosts() {
    return this.posts;
  }

  createPost(postDto: CreatePostDto) {
    this.posts.push(postDto);
    writeFileSync(this.filePath, JSON.stringify(this.posts));
  }
}
