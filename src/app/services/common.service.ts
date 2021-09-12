import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  axiosError(error: any) {
    console.error(error.response || error.message || error);
  };


  constructor() { }
}
