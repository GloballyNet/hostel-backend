import { MigrationInterface, QueryRunner } from "typeorm";

export class StudentEntityModified1708345329124 implements MigrationInterface {
    name = 'StudentEntityModified1708345329124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "age" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "dateOfBirth" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "created_at" SET DEFAULT '"2024-02-19T12:22:09.544Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "created_at" SET DEFAULT '2024-02-18 18:24:07.524'`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "dateOfBirth" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "age" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "password"`);
    }

}
