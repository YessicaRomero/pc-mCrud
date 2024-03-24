import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SerieService } from './serie.service';
import { iSerie } from './serie.interface';
import { get } from 'http';

@Controller('series')
export class SerieController {
public constructor(private readonly SerieService: SerieService){}
@Get()
getseries(): Promise<iSerie[]>{
    return this.SerieService.getSeries();
}
@Get()
getSerieById(@Param('id')id:string) : Promise<iSerie>{
    return this.SerieService.getSerieById(id)
}
@Post()
create(@Body() serie:iSerie) {
    return this.SerieService.addSerie(serie)
}
@Delete(':id')
deleteByIdSerie(@Param('id') id:string){
    return this.SerieService.deleteByIdSerie(id);

}
@Put(':id')
updateSerieById(
    @Param('id') id:string,
    @Body() body: iSerie,
): Promise<void> {
    return this.SerieService.updateSerieById(id, body);
}


}
