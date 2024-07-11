import { DynamicModule, Module } from '@nestjs/common';
import {
  IModuleLoaderOptions,
  MODULE_LOADER_NAMES,
  MODULE_LOADER_OPTIONS,
} from './module-loader-defs';
import { InternalModuleLoader } from './module-loader.helper';
import { ModuleLoaderService } from './module-loader.service';
import { ModuleLoaderFactory } from './module-loader.factory';

@Module({})
export class ModuleLoaderModule {
  /**
   * @description Load Modules dynamically via GLOBs and native import() function.
   * @param moduleLoaderOptions options for GLOB searches
   */
  public static async register(
    moduleLoaderOptions: IModuleLoaderOptions,
  ): Promise<DynamicModule> {
    const moduleInfos =
      await InternalModuleLoader.loadModules(moduleLoaderOptions);
    const modules = moduleInfos.map((moduleInfo) => moduleInfo.module);
    const moduleNames = moduleInfos.map((moduleInfo) => moduleInfo.name);

    return {
      module: ModuleLoaderModule,
      imports: [...modules],
      providers: [
        {
          provide: MODULE_LOADER_OPTIONS,
          useValue: moduleLoaderOptions,
        },
        {
          provide: MODULE_LOADER_NAMES,
          useValue: moduleNames,
        },
        ModuleLoaderService,
        ModuleLoaderFactory,
      ],
    };
  }
}
