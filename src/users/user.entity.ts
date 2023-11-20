import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  afferInsert() {
    console.log({
      id: this.id,
      email: this.email,
      password: this.password,
    });
  }

  @AfterUpdate()
  afferUpdate() {
    console.log({
      id: this.id,
      email: this.email,
      password: this.password,
    });
  }

  @AfterRemove()
  afferRemove() {
    console.log({
      id: this.id,
      email: this.email,
      password: this.password,
    });
  }
}
