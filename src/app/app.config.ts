import { HttpHeaders } from '@angular/common/http';

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    })
};

//export const API_ROOT = 'http://planfines2.com.ar/main/api/';
export const API_ROOT = 'http://localhost/fines2-estructura/api/';  
