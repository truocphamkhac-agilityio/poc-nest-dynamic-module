import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ModuleLoaderModule } from './common/module-loader.module';

@Module({
  imports: [
    EventEmitterModule.forRoot({ wildcard: true }),
    ModuleLoaderModule.register({
      name: 'dynamic-module-loader',
      /**
       * Make sure the path resolves to the **DIST** subdirectory
       */
      path: path.resolve(__dirname, './modules'),
      fileSpec: '**/*.module.js',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
