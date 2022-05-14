import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ChildService } from "src/child/domain/ports/child.service";
import { ChildDto } from "./child.dto";

@Controller({
  path: 'children',
})

export class ChildController {
  constructor(private readonly childService: ChildService) { }

  @Post()
  async create(@Body() childDto: ChildDto): Promise<any> {
    return await this.childService.create(childDto);
  }

  @Get('/:id')
  async findById(id: number): Promise<any> {
    return await this.childService.findById(id);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return await this.childService.findAll();
  }

  @Put('/:id')
  async update(@Param() params, @Body() childDto: ChildDto): Promise<any> {
    return await this.childService.update(params.id, childDto);
  }

  @Delete('/:id')
  async delete(@Param() params): Promise<any> {
    return await this.childService.delete(params.id);
  }
}