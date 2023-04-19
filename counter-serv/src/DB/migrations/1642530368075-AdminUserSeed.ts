import { MigrationInterface, QueryRunner } from 'typeorm';
import { adminSeed } from './adminSeed';

export class AdminUserSeed1642530368075 implements MigrationInterface {
  name = 'AdminUserSeed1642530368075';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('users')
      .values(adminSeed)
      .execute();
  }

  public async down(): Promise<void> {}
}
