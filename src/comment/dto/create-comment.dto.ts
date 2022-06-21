import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @MinLength(2)
  @MaxLength(16)
  @IsString()
  name: string;

  @MinLength(8)
  @MaxLength(128)
  @IsString()
  text: string;

  @IsString()
  bidId: string;
}
