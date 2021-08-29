import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private commonService: CommonService) {}

  axiosError(error: any) {
    console.error(error.response || error.message || error);
  };
}
