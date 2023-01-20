import { MigrationInterface, QueryRunner } from "typeorm";

export class addYearField1674238573370 implements MigrationInterface {
    name = 'addYearField1674238573370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "year" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "year"`);
    }

}
