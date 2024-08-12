import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateRoomEntity1620309249000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('room', 'hostelId');
    await queryRunner.addColumn(
      'room',
      new TableColumn({
        type: 'int',
        name: 'capacity',
      }),
    );
    await queryRunner.changeColumn(
      'room',
      'rommType',
      new TableColumn({
        name: 'roomType',
        type: 'enum',
        enum: ['SINGLE', 'DOUBLE', 'SUITE'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'room',
      'roomType',
      new TableColumn({
        name: 'roomType',
        type: 'varchar',
      }),
    );
    await queryRunner.addColumn(
      'room',
      new TableColumn({
        name: 'hostelId',
        type: 'int',
      }),
    );
    await queryRunner.dropColumn('room', 'capacity');
  }
}
