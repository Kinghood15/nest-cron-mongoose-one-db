import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Action, ActionSchema } from '../../models/action.model';
import { ActionsService } from './actions.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Action.name, schema: ActionSchema }])
  ],
  providers: [ActionsService],
  exports: [ActionsService],
})
export class ActionsModule {}
