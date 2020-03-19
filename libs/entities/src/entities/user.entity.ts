import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    JoinColumn,
    OneToOne
} from 'typeorm';
import { plainToClass } from 'class-transformer';
const normalizeEmail = require('normalize-email');

import { ROLE } from '@test/constants';

import { PatientEntity } from '.'
import { BaseEntity } from '../abstract/base.entity'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {

    @Column()
    email: string;

    @Column()
    email_normalized: string;

    @Column({ default: false })
    is_email_confirmed: boolean;

    @Column({ default: ROLE.PATIENT, type: 'enum', enum: ROLE })
    role: ROLE;

    @Column({ type: 'char', length: 13 })
    mobile_phone: string;

    @Column({ default: false })
    is_mobile_phone_confirmed: boolean;

    @OneToMany(type => PatientEntity, patientEntity => patientEntity.user)
    patients: PatientEntity[]

    constructor(partial: Partial<UserEntity>) {
        super();
        Object.assign(this, plainToClass(UserEntity, partial))
        this.email_normalized = normalizeEmail(this.email_normalized || '');
    }

}
