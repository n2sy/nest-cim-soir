import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class AddTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsNumber()
  @Min(2020)
  @Max(2030)
  year: number;

  @IsString()
  @IsIn(['done', 'in progress', 'todo'])
  status: string;
}
