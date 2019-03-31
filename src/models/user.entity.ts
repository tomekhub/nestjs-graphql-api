import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'user',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30,
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    nullable: false,
    select: false,
  })
  password: string;

  @Column({
    length: 30,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    length: 20,
    nullable: true,
  })
  name: string;

  @Column({
    length: 30,
    nullable: true,
  })
  surname: string;

  @Column({
    nullable: true,
  })
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
