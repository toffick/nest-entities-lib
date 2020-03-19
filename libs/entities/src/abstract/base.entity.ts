import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

export class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: string;

    @CreateDateColumn({ type: 'timestamp' })
    updated_at: string;

}
