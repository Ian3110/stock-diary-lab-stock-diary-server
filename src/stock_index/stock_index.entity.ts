import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IStockIndex } from './stock_index.interface';

@Entity({ name: 'stock_indexes' })
export class StockIndexEntity implements IStockIndex {
  @ApiProperty({ description: '스톡 인덱스 고유 번호' })
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ApiProperty({ description: '주식 종목명' })
  @Column({ charset: 'utf8' })
  name: string;

  @ApiProperty({ description: '수치' })
  @Column()
  point: string;

  @ApiProperty({ description: '등략률' })
  @Column()
  flucRate: string;

  @ApiProperty({ description: '생성시각' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ description: '수정시각' })
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  constructor(partial: Partial<StockIndexEntity>) {
    if (partial) {
      this.name = partial.name;
      this.point = partial.point;
      this.flucRate = partial.flucRate;
    }
  }
}
