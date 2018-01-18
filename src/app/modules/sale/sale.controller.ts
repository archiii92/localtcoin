import { Controller, Get, Param, Post, Put, Body, Delete, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { SaleService } from './sale.service';
import { Sale } from './sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { ApiUseTags } from '@nestjs/swagger';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { HttpException } from '@nestjs/core';

@ApiUseTags('sales')
@Controller('sales')
export class SalesController {
  constructor(private readonly service: SaleService) {}

  @Get()
  findAll(): Promise<Sale[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sale> {
    console.log(id);
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    console.log(createSaleDto);
    return this.service.create(createSaleDto);
  }

  // @Put()
  // update(@Body() updateSaleDto: UpdateSaleDto): Promise<void> {
  //   return this.service.update(updateSaleDto);
  // }

  // @Delete(':id')
  // delete(@Param() params): Promise<void> {
  //   return this.service.delete(params.id);
  // }
}