import { Controller, Get } from '@nestjs/common';

@Controller('missions')
export class MissionsController {
  @Get()
  getMissions(): string {
    return 'All missions';
  }
}
