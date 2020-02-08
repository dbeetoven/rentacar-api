import { Injectable } from '@nestjs/common';
import { AbstractService, Post, PostDTO } from 'src/models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService implements AbstractService<PostDTO, Post> {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}
  async findAll(): Promise<Post[]> {
    const posts = await this.postModel.find().exec();
    return posts;
  }
  async findById(id: number): Promise<Post> {
    const post = await this.postModel.findById(id).exec();
    return post;
  }
  async findOne(options: object): Promise<Post> {
    const post = await this.postModel.findOne(options).exec();
    return post;
  }
  create(postDto: PostDTO): Promise<Post> {
    const posts = new this.postModel(postDto);
    return posts.save();
  }
  async update(id: number, post: PostDTO): Promise<Post> {
    const editedPost = await this.postModel.findByIdAndUpdate(id, post, {
      new: true,
    });
    return editedPost;
  }
  async delete(id: number): Promise<Post> {
    const deletedPost = await this.postModel.findByIdAndRemove(id);
    return deletedPost;
  }
}
