import {Shop} from './shop' ;  


export class PageResponse {
    content : Shop[];
    totalPages : number;
    totalElements : number;
    last : boolean;
    size : number ;
    first : boolean ;
    sort : string ;
    numberOfElements : number ;

}