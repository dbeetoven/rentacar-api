import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, Response } from '@nestjs/common';
import { ValidateObjectId } from 'src/pipes/validate-object-id.pipe';
import { CarDTO } from './../../models/car/car';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}
  @Post()
  async addCustomer(@Res() res, @Body() carDto: CarDTO) {
    const newCustomer = await this.carService.create(carDto);
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been submitted successfully!',
      post: newCustomer,
    });
  }

  @Get('/:id')
  async getCustomer(@Res() res, @Param('id', new ValidateObjectId()) id) {
    const customer = await this.carService.findById(id);
    if (!customer) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json(customer);
  }

  @Get('/find')
  public async findOne(@Response() res, @Body() body) {
    const queryCondition = body;
    const customer = await this.carService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(customer);
  }

  @Get('')
  async getCustomers(@Res() res) {
    const customers = await this.carService.findAll();
    return res.status(HttpStatus.OK).json(customers);
  }

  @Put('/:id')
  async updateCustomer(
    @Res() res,
    @Query('id', new ValidateObjectId()) id,
    @Body() carDto: CarDTO,
  ) {
    const editedCustomer = await this.carService.update(id, carDto);
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
    const deletedCustomer = await this.carService.delete(id);
    if (!deletedCustomer) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted!',
      post: deletedCustomer,
    });
  }
}
