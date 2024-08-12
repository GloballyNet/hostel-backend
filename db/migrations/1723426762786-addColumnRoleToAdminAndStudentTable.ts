import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnRoleToAdminAndStudentTable1723426762786
  implements MigrationInterface
{
  name = 'AddColumnRoleToAdminAndStudentTable1723426762786';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'student',
      new TableColumn({
        name: 'role',
        type: 'varchar',
      }),
    );
    await queryRunner.addColumn(
      'admin',
      new TableColumn({
        name: 'role',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('student', 'role');
    await queryRunner.dropColumn('admin', 'role');
  }
}
