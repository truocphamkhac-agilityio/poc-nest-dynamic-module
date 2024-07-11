import { DynamicModule } from '@nestjs/common';

export interface ModuleInfo {
  name: string;
  module: DynamicModule;
}
