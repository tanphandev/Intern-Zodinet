import { Module } from '@nestjs/common';
import { PostController } from './controller/post/post.controller';
import { PostService } from './service/post/post.service';

@Module({
  controllers: [PostController],
  providers: [PostService]
})
export class PostsModule {}
