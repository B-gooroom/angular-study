import { Injectable } from '@angular/core';
import { AxiosError } from 'axios'


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  axiosError(error: AxiosError) {
    console.error(error.response || error.message || error);
  };


  constructor() { }
}
