import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, Response } from '@nestjs/common';
import { ProfileDTO } from 'src/models';
import { ValidateObjectId } from 'src/pipes/validate-object-id.pipe';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @Post()
  async addCustomer(@Res() res, @Body() profileDTO: ProfileDTO) {
    const newCustomer = await this.profileService.create(profileDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been submitted successfully!',
      post: newCustomer,
    });
  }

  @Get('/:id')
  async getCustomer(@Res() res, @Param('id', new ValidateObjectId()) id) {
    const customer = await this.profileService.findById(id);
    if (!customer) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json(customer);
  }

  @Get('/find')
  public async findOne(@Response() res, @Body() body) {
    const queryCondition = body;
    const customer = await this.profileService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(customer);
  }

  @Get('')
  async getCustomers(@Res() res) {
    const customers = await this.profileService.findAll();
    return res.status(HttpStatus.OK).json(customers);
  }

  @Put('/:id')
  async updateCustomer(
    @Res() res,
    @Query('id', new ValidateObjectId()) id,
    @Body() profileDTO: ProfileDTO,
  ) {
    const editedCustomer = await this.profileService.update(id, profileDTO);
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
    const deletedCustomer = await this.profileService.delete(id);
    if (!deletedCustomer) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted!',
      post: deletedCustomer,
    });
  }
}
