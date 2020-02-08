import { Injectable } from '@nestjs/common';
import { AbstractService, Car, CarDTO } from 'src/models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarsService implements AbstractService<CarDTO, Car> {
  constructor(@InjectModel('Car') private readonly carModel: Model<Car>) {}

  async findAll(): Promise<Car[]> {
    const cars = await this.carModel.find().exec();
    return cars;
  }
  async findById(id: number): Promise<Car> {
    const carFound = await this.carModel.findById(id).exec();
    return carFound;
  }
  async findOne(options: object): Promise<Car> {
    const carFound = await this.carModel.findOne(options).exec();
    return carFound;
  }
  create(carDto: CarDTO): Promise<Car> {
    const car = new this.carModel(carDto);
    return car.save();
  }
  async update(id: number, carDto: CarDTO): Promise<Car> {
    const carFound = await this.carModel.findByIdAndUpdate(id, carDto, {
      new: true,
    });
    return carFound;
  }
  async delete(id: number): Promise<Car> {
    const carFound = await this.carModel.findByIdAndRemove(id);
    return carFound;
  }
}
