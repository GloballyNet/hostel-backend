import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPasswordColumnToStudent1723489299832
  implements MigrationInterface
{
  name = 'AddPasswordColumnToStudent1723489299832';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'student',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        length: '255',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('student', 'password');
  }
}
