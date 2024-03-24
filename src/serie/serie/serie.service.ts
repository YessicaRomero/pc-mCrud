import { Injectable } from '@nestjs/common';
import { iSerie } from './serie.interface';
const base_url: string = 'http://localhost:3030/series/';
@Injectable()
export class SerieService {

async getSeries(): Promise<iSerie[]> {
const res = await fetch(base_url);
const series = await res.json();
return series;
}

async getSerieById(id:string): Promise<iSerie>{
    const res = await fetch(base_url + id);
    const serie = await res.json();
    return serie;
}
async addSerie(serie: iSerie): Promise<iSerie> {
    const newSerie = {...serie};
    const res = await fetch(base_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify(newSerie),
    });
    const parsedResponse = await res.json();
    return parsedResponse;
}
 async deleteByIdSerie(id: string): Promise<any>{
    const res = await fetch(base_url+ id, {
        method: 'DELETE',
    });
    const parsedResponse = await res.json();
    return parsedResponse;
 }
 async updateSerieById(id:string, body:iSerie): Promise<void>{
 const isSerie = await this.getSerieById(id);
 if(!Object.keys(isSerie).length)return;
 const updateSerie = {...body, id};
 const res = await fetch(base_url+ id,{
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json',
},
body: JSON.stringify(updateSerie),
 });
 const parsedResponse = await res.json();
 return parsedResponse;
 }
 }


