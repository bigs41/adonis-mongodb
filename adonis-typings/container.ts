declare module '@ioc:Adonis/Core/Application' {
  import { DatabaseContract } from '@ioc:Zakodium/Mongodb/Database';
  import Migration from '@ioc:Zakodium/Mongodb/Migration';
  import * as Odm from '@ioc:Zakodium/Mongodb/Odm';

  export interface ContainerBindings {
    'Zakodium/Mongodb/Database': DatabaseContract;
    'Zakodium/Mongodb/Odm': typeof Odm;
    'Zakodium/Mongodb/Migration': typeof Migration;
  }
}
