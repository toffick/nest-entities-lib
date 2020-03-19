import { ValueTransformer } from 'typeorm';

import { PointDto } from '../dtos/point.dto'

export class PointTransformer implements ValueTransformer {

    to(value: PointDto): string {
        return `${value.x},${value.y}`
    }

    from(point: any): PointDto {
        return new PointDto(point.x, point.y);
    }

}
