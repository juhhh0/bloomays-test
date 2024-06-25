import { Controller, Get } from '@nestjs/common';
import { MissionsService } from './missions.service';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Get()
  getMissions() {
    return this.missionsService.getMissions();
  }
}
