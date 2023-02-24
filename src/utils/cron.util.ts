import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ActionsService } from '../modules/actions/actions.service';

@Injectable()
export class CronUtil {
  constructor(private actionsService: ActionsService) {}
  private readonly logger = new Logger(CronUtil.name);

  @Cron('*/5 * * * * *')
  async createNewAction() {
      await this.actionsService.create('New Action', 'This action was created by a cron job.');
      this.logger.debug('Called when the second is 5');
  }
}
