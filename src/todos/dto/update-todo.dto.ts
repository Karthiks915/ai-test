import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsNumber } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsNumber()
  id: number;
}
