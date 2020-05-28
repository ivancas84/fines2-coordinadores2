import { HttpHeaders } from '@angular/common/http';

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    })
};

//export const API_URL = 'http://planfines2.com.ar/api/';
export const UPLOAD_URL = 'http://localhost/upload/';
export const API_URL = 'http://planfines2.com.ar/api/';
