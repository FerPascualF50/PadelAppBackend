import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Club, ClubSchema } from './entities/club.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Club.name, schema: ClubSchema}
    ])
  ],
  controllers: [ClubController],
  providers: [ClubService]
})
export class ClubModule {}
