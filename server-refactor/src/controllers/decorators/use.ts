import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

// factory decorator
export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
    // middlewares.push(middleware);
    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware], // shortened syntax for push above
      target,
      key
    );
  };
}
