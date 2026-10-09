import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamp } from '../generics/timestamp.js';

@Entity('livre')
export class BookEntity extends TimeStamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    //name: 'title',
    //type: 'varchar',
    //unique: true,
    //update: true,
    length: 50,
  })
  title: string;
  @Column()
  author: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  editor: string;

  @Column({
    type: 'int',
  })
  year: number;

  @Column()
  image: string;
}
