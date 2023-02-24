import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { ActionsModule } from './modules/actions/actions.module';
import { CronUtil } from './utils/cron.util';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ScheduleModule.forRoot(),
    ActionsModule,
  ],
  providers: [CronUtil],
})
export class AppModule {}
