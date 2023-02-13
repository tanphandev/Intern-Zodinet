import { Body, Controller, Get, Post, Response } from '@nestjs/common';
import { Response as Res } from 'express';
import { CreatePostDto } from 'src/posts/dtos/CreatePost.dto';
import { PostService } from 'src/posts/service/post/post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}
  @Get('')
  getAllPost() {
    return this.postService.getPosts();
  }

  @Post('')
  createPosts(@Body() createPostDto: CreatePostDto, @Response() res: Res) {
    res.set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    this.postService.createPost(createPostDto);
  }
}
