import { Mapper, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Student } from 'src/entites/student.entity';
import { CreateStudentDto, StudentResponseDto } from './student.dto';

export class StudentProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, Student, StudentResponseDto);
      createMap(mapper, CreateStudentDto, Student);
    };
  }
}
