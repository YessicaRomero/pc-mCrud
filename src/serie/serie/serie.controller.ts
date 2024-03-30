import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, HttpCode } from '@nestjs/common';
import { SerieService } from './serie.service';
import { iSerie } from './serie.interface';
import { get } from 'http';
import { response } from 'express';

@Controller('series')
export class SerieController {
public constructor(private readonly SerieService: SerieService){}
@Get()
getseries(): Promise<iSerie[]>{
    return this.SerieService.getSeries();
}
@Get(':id')
async getSerieById(@Res() response, @Param('id')id:string) : Promise<any>{
    try{
        const responseFromService = await this.SerieService.getSerieById(id)
        if(Object.keys(responseFromService).length){
            return response.status(HttpStatus.OK).json(responseFromService);
        }else {
              return response
              .status(HttpStatus.NOT_FOUND)
              .json({ error: 'La serie no existe'});
        }
              
    } catch (error){
        return response
        .status(HttpStatus.NOT_FOUND)
        .json({ error: 'El id no existe'})
    }
    
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
