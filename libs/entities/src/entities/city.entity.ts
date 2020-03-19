import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne, OneToMany
} from 'typeorm';
import { plainToClass } from 'class-transformer';

import { PointTransformer } from '../transformers/point.transformer'
import { PointDto } from '../dtos/point.dto';
import { BaseEntity } from '../abstract/base.entity';

@Entity({ name: 'city' })
export class CityEntity extends BaseEntity {

    @Column({ nullable: true })
    region_id: number | null;

    @Column()
    name: string;

    @Column()
    is_capital: boolean;

    @Column({
        type: 'point',
        nullable: true,
        transformer: new PointTransformer()
    })
    coordinates: PointDto | null;

    constructor(partial: Partial<CityEntity>) {
        super();
        Object.assign(this, plainToClass(CityEntity, partial))
    }

}
