import { CustomerDTO } from 'src/models';
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, Response } from '@nestjs/common';
import { ValidateObjectId } from './../../pipes/validate-object-id.pipe';
import { CustomerService } from './customer.service';


@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  async addCustomer(@Res() res, @Body() customerDTO:CustomerDTO) {
    const newCustomer = await this.customerService.create(customerDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been submitted successfully!',
      post: newCustomer,
    });
  }

  @Get('/:id')
  async getCustomer(@Res() res, @Param('id', new ValidateObjectId()) id) {
    const customer = await this.customerService.findById(id);
    if (!customer) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json(customer);
  }

  @Get('/find')
  public async findOne(@Response() res, @Body() body) {
      const queryCondition = body;
      const customer = await this.customerService.findOne(queryCondition);
      return res.status(HttpStatus.OK).json(customer);
  }

  @Get('')
  async getCustomers(@Res() res) {
    const customers = await this.customerService.findAll();
    return res.status(HttpStatus.OK).json(customers);
  }

  @Put('/:id')
  async updateCustomer(
    @Res() res,
    @Query('id', new ValidateObjectId()) id,
    @Body() customerDto: CustomerDTO,
  ) {
    const editedCustomer = await this.customerService.update(
        id,
      customerDto,
    );
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
     const deletedCustomer = await this.customerService.delete(id);
     if (!deletedCustomer) {
         throw new NotFoundException('Post does not exist!');
     }
     return res.status(HttpStatus.OK).json({
       message: 'Post has been deleted!',
       post: deletedCustomer,
     });
   }
}
