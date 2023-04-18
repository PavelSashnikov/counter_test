import { Base } from 'src/entities/interface';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('users')
@Unique(['id'])
export class UserEntity implements Base.IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true })
  login: string;

  @Column('varchar', { select: false })
  password: string;
}
