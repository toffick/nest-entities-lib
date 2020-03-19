import {
    Column,
} from 'typeorm';

import { SEX } from '@test/constants';

import { BaseEntity } from './base.entity';

export class PersonBaseEntity extends BaseEntity {

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    patronymic: string;

    @Column({ default: SEX.OTHER, type: 'enum', enum: SEX })
    sex: string;
}
