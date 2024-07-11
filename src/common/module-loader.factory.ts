import { ModuleLoaderService } from './module-loader.service';
import { MODULE_LOADER } from './module-loader-defs';

export const ModuleLoaderFactory = {
  provide: MODULE_LOADER,
  useFactory: (moduleLoaderService: ModuleLoaderService) => {},
  inject: [ModuleLoaderService],
};
