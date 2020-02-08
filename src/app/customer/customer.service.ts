import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractService } from 'src/models/abstract/abstract.service';
import { CustomerDTO, Customer } from 'src/models';

@Injectable()
export class CustomerService implements AbstractService<CustomerDTO, Customer> {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>
  ) {}

  async findAll(): Promise<Customer[]> {
    const customers = await this.customerModel.find().exec();
    return customers;
  }
  async findById(id: number): Promise<Customer> {
    const customer = await this.customerModel.findById(id).exec();
    return customer;
  }
  async findOne(options: object): Promise<Customer> {
    const customer = await this.customerModel.findOne(options).exec();
    return customer;
  }
  create(customerDto: CustomerDTO): Promise<Customer> {
    const customer = new this.customerModel(customerDto);
    return customer.save();
  }
  async update(id: number, customer: CustomerDTO): Promise<any> {
    const editedCustomer = await this.customerModel.findByIdAndUpdate(
      id,
      customer,
      { new: true },
    );
    return editedCustomer;
  }

  async delete(id: number): Promise<Customer> {
    const deletedCustomer = await this.customerModel.findByIdAndRemove(id);
    return deletedCustomer;
  }
}
