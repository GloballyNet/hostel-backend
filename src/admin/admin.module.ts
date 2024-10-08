import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../entites/admin.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
})
export class AdminModule {}
