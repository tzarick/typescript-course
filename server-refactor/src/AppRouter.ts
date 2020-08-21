import express from 'express';

// singleton
export class AppRouter {
  private static instance: express.Router;

  // easily set up a singleton inside TS. Only ever want to have a single router inside the application
  static getInstance(): express.Router {
    // static -> can access method without creating an AppRouter instance
    if (!AppRouter.instance) {
      // if first time -> make instance, otherwise just return the 1 instance
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
