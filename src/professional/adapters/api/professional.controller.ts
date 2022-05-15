import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Professional } from "src/professional/domain/model/professional.model";
import { ProfessionalService } from "src/professional/domain/ports/professional.service";
import { ProfessionalDto } from "./professional.dto";

@Controller({
  path: 'professionals',
})

export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) { }

  @Post()
  async create(@Body() { username, name, email, password, position, institution }: ProfessionalDto): Promise<Professional> {
    const professional = new Professional(username, name, email, password, position, institution);

    return await this.professionalService.create(professional);
  }

  @Get('/:id')
  async findById(@Param() params): Promise<Professional> {
    return await this.professionalService.findById(params.id);
  }

  @Get()
  async findAll(): Promise<Professional[]> {
    return await this.professionalService.findAll();
  }

  @Put('/:id')
  async update(@Param() params, @Body() { username, name, email, password, position, institution }: ProfessionalDto):
    Promise<Professional> {

    const professional = new Professional(username, name, email, password, position, institution);

    return await this.professionalService.update(params.id, professional);
  }

  @Delete('/:id')
  async delete(@Param() params): Promise<Professional> {
    return await this.professionalService.delete(params.id);
  }
}