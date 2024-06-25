import { Injectable } from '@nestjs/common';
import * as Airtable from 'airtable';

@Injectable()
export class MissionsService {
  private readonly base: Airtable.Base;

  constructor() {
    this.base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID,
    );
  }

  async getMissions() {
    const missionsData = await this.base('missions').select().all();
    const missions = missionsData.map((mission) => mission.fields);

    const freelancesData = await this.base('freelances').select().all();
    const freelances = freelancesData.map((freelance) => freelance.fields);

    return missions.map((mission) => ({
      ...mission,
      freelance: freelances.find(
        (freelance) => freelance.id === mission.freelance,
      ),
    }));
  }
}
