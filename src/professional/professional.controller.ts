import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProfessionalEntity } from '@/domain/entities/professional.entity';
import { ProfessionalService } from '@/professional/professional.service';
import { ProfessionalDto } from './dto';

@Controller({
  path: 'professionals',
})
export class ProfessionalController {
  constructor(
    private readonly professionalService: ProfessionalService,
    private professional: ProfessionalEntity,
  ) {}

  @Post()
  async create(
    @Body()
    { username, name, email, password, position, institution }: ProfessionalDto,
  ): Promise<ProfessionalEntity> {
    const professional = {
      username,
      name,
      email,
      password,
      position,
      institution,
    };

    return await this.professionalService.create(professional);
  }

  // @Get('/:id')
  // async findById(@Param() params): Promise<ProfessionalEntity> {
  //   return await this.professionalService.findById(params.id);
  // }

  @Get()
  async findAll(): Promise<ProfessionalEntity[]> {
    return await this.professionalService.findAll();
  }

  @Put('/:id')
  async update(
    @Param() params,
    @Body()
    { username, name, email, password, position, institution }: ProfessionalDto,
  ): Promise<ProfessionalEntity> {
    const professional = new ProfessionalEntity(
      username,
      name,
      email,
      password,
      position,
      institution,
    );

    return await this.professionalService.update(params.id, professional);
  }

  @Delete('/:id')
  async delete(@Param() params): Promise<ProfessionalEntity> {
    return await this.professionalService.delete(params.id);
  }
}
