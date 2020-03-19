import {
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
    OneToOne
} from 'typeorm';
import { plainToClass } from 'class-transformer';

import { UserEntity } from '..'
import { PersonBaseEntity } from '../abstract/full.name.entity'

@Entity({ name: 'patient' })
export class PatientEntity extends PersonBaseEntity {

    @Column({ nullable: true })
    user_id: number | null;

    @Column({ nullable: true })
    city_id: number | null;

    @Column()
    is_primary: boolean;

    @Column()
    born_date: Date;

    @ManyToOne(type => UserEntity, user => user.patients)
    @JoinColumn({
        name: 'user_id',
        referencedColumnName: 'id',
    })
    user: UserEntity;

    constructor(partial: Partial<PatientEntity>) {
        super();
        Object.assign(this, plainToClass(PatientEntity, partial))
    }

}
