import { HttpHeaders } from '@angular/common/http';

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    })
};


//export const API_ROOT = 'http://planfines2.com.ar/api/';
export const API_ROOT = 'http://localhost/fines2-estructura/api/';  
//export const WEB_INFO = 'http://planfines2.com.ar/info/';
export const WEB_INFO = 'http://localhost/fines2-info/';

