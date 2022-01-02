import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IListedStock, MarketType } from '../listed-stock.interface';

@Entity({ name: 'listed_stocks' })
export class ListedStockEntity implements IListedStock {
  @ApiProperty({ description: '주식 종목 코드' })
  @PrimaryColumn()
  id: string;

  @ApiProperty({ description: '종목명' })
  @Column({ charset: 'utf8' })
  name: string;

  @ApiProperty({ description: '대분류' })
  @Column({ nullable: true, charset: 'utf8' })
  largeSector: string;

  @ApiProperty({ description: '중분류' })
  @Column({ nullable: true, charset: 'utf8' })
  mediumSector: string;

  @ApiProperty({ description: '소속된 시장' })
  @Column({ type: 'enum', enum: MarketType })
  market: MarketType;

  constructor(partial: Partial<ListedStockEntity>) {
    if (partial) {
      this.id = partial.id;
      this.name = partial.name;
      this.largeSector = partial.largeSector || null;
      this.mediumSector = partial.mediumSector || null;
      this.market = partial.market;
    }
  }
}
