import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Action } from '../../models/action.model';

@Injectable()
export class ActionsService {
  constructor(@InjectModel(Action.name) private actionModel: Model<Action>) {}

  async create(name: string, description: string) {
    const now = new Date();
    const createdAction = new this.actionModel({ name, description, createdAt: now });
    return createdAction.save();
  }

  async findAll() {
    return this.actionModel.find().exec();
  }
}
