import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transaction} from './transaction';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  apiUrl = environment.apiBaseUri;
  getAllTransactionsUrl = `${this.apiUrl}/transactions`;

  constructor(private httpClient: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.getAllTransactionsUrl);
  }

  create(expense: any) {
    console.log('Called service method');
    return this.httpClient.post(`${this.apiUrl}/expenses`, expense).subscribe();
  }
}
