import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  EV_MODULE_DYN_LOADER,
  ModuleDynLoaderEvent,
} from './common/module-loader-defs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  @OnEvent(EV_MODULE_DYN_LOADER + '*', { async: true })
  async handleModuleLoaded(payload: ModuleDynLoaderEvent) {
    if (payload.error) {
      this.logger.log(`**Modules load ERROR: "${payload.error}" **`);
    } else {
      this.logger.log(
        `**Modules sucessfully loaded: "${
          payload.name
        } => (${payload.moduleNames.toString()})" **`,
      );
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
