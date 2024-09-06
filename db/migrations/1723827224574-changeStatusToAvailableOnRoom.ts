import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeStatusToAvailableOnRoom1723827224574
  implements MigrationInterface
{
  name = 'ChangeStatusToAvailableOnRoom1723827224574';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('room', 'status', 'available');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('room', 'available', 'status');
  }
}
