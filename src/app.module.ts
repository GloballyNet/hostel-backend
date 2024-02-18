import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { RoomModule } from './room/room.module';
import { BookingModule } from './booking/booking.module';
import { dbdatasource } from './db/data.source';
import 
@Module({
  imports: [
    StudentModule,
    AdminModule,
    RoomModule,
    BookingModule,
    TypeOrmModule.forRoot(dbdatasource),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
