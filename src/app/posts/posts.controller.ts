import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, Response } from '@nestjs/common';
import { PostDTO } from 'src/models';
import { ValidateObjectId } from 'src/pipes/validate-object-id.pipe';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Post()
  async addCustomer(@Res() res, @Body() postDTO: PostDTO) {
    const newCustomer = await this.postsService.create(postDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been submitted successfully!',
      post: newCustomer,
    });
  }

  @Get('/:id')
  async getCustomer(@Res() res, @Param('id', new ValidateObjectId()) id) {
    const customer = await this.postsService.findById(id);
    if (!customer) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json(customer);
  }

  @Get('/find')
  public async findOne(@Response() res, @Body() body) {
    const queryCondition = body;
    const customer = await this.postsService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(customer);
  }

  @Get('')
  async getCustomers(@Res() res) {
    const customers = await this.postsService.findAll();
    return res.status(HttpStatus.OK).json(customers);
  }

  @Put('/:id')
  async updateCustomer(
    @Res() res,
    @Query('id', new ValidateObjectId()) id,
    @Body() postDTO: PostDTO,
  ) {
    const editedCustomer = await this.postsService.update(id, postDTO);
    if (!editedCustomer) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      post: editedCustomer,
    });
  }

  // Delete a post using ID
  @Delete('/:id')
  async deletePost(@Res() res, @Query('id', new ValidateObjectId()) id) {
    const deletedCustomer = await this.postsService.delete(id);
    if (!deletedCustomer) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted!',
      post: deletedCustomer,
    });
  }
}
