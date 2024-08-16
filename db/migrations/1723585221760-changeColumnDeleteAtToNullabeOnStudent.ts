import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeColumnDeleteAtToNullabeOnStudent1723585221760
  implements MigrationInterface
{
  name = 'ChangeColumnDeleteAtToNullabeOnStudent1723585221760';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'student',
      'deleted_at',
      new TableColumn({
        name: 'deleted_at',
        type: 'timestamp',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'student',
      'deleted_at',
      new TableColumn({
        name: 'deleted_at',
        type: 'timestamp',
        isNullable: false,
      }),
    );
  }
}
