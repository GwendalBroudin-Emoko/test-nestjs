import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SubrouteMiddleware implements NestMiddleware {
  subRouteGetter(req: any){
    
  }

  use(req: any, res: any, next: () => void) {
    next();
  }
}
