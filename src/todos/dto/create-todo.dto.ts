// import { IsString } from 'class-validator';

import { IsBoolean, IsOptional, IsString } from 'class-validator';

// export class CreateTodoDto {
//   @IsString()
//   title: string;
// }

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean = false;
}
