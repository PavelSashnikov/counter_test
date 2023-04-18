import { MigrationInterface, QueryRunner } from 'typeorm';
import { adminSeed } from './adminSeed';

export class AdminUserSeed1681838119123 implements MigrationInterface {
  name = 'AdminUserSeed1681838119123';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('User')
      .values(adminSeed)
      .execute();
  }

  public async down(): Promise<void> {}
}
