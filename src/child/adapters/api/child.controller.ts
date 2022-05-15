import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Child } from "src/child/domain/model/child.model";
import { ChildService } from "src/child/domain/ports/child.service";
import { ChildDto } from "./child.dto";

@Controller({
  path: 'children',
})

export class ChildController {
  constructor(private readonly childService: ChildService) { }

  @Post()
  async create(@Body() { name, age, institution, note }: ChildDto): Promise<Child> {
    const child = new Child(name, age, institution, note);

    return await this.childService.create(child);
  }

  @Get('/:id')
  async findById(@Param() params): Promise<Child> {
    return await this.childService.findById(params.id);
  }

  @Get()
  async findAll(): Promise<Child[]> {
    return await this.childService.findAll();
  }

  @Put('/:id')
  async update(@Param() params, @Body() { name, age, institution, note }: ChildDto): Promise<Child> {
    const child = new Child(name, age, institution, note);

    return await this.childService.update(params.id, child);
  }

  @Delete('/:id')
  async delete(@Param() params): Promise<Child> {
    return await this.childService.delete(params.id);
  }
}