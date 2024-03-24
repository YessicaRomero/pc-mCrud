import { Module } from '@nestjs/common';
import { SerieController } from './serie/serie/serie.controller';
import { SerieService } from './serie/serie/serie.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [ ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),],
  controllers: [SerieController],
  providers: [SerieService],
})
export class AppModule {}
