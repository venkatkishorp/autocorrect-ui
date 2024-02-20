import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocorrectServiceService {
  apiUrl: string = 'https://autocorrect-api-fq19.onrender.com/';

  constructor(
    private http: HttpClient
  ) { }

  getWordAutocorrects(word: string): Observable<any> {
    let params = new HttpParams();
    params.set('word', word);
    return this.http.get<any>(this.apiUrl + 'autocorrect?word=' + word, {params: params});
  }
}
