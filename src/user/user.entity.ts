import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Photo } from '../photos/photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
	no: number;
	
	@Column()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: 'Y' })
  isActive: string;

	@Column()
  photos: string;
  // @OneToMany(type => Photo, photo => photo.user)
  // photos: Photo[];
}