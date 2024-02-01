import { Module } from '@nestjs/common';
import { TourmentService } from './tourment.service';
import { TourmentController } from './tourment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tourment, TourmentSchema } from './entities/tourment.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Tourment.name, schema: TourmentSchema}
    ])
  ],
  controllers: [TourmentController],
  providers: [TourmentService]
})
export class TourmentModule {}
