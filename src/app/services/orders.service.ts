import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OrdersService {
  constructor(private httpClient: HttpClient) { }

  public getOrders( ): Observable<Order[]> {
    return this.httpClient.get<{value: Order[]}>(environment.ordersEndpoint)
      .pipe(
        map(x => x.value),
        catchError(this.handleError)
      );
  }

  public getOrder(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${environment.ordersEndpoint}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public addOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(environment.ordersEndpoint, order)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(handleError: any): Observable<any> {
    throw new Error('Not implemented');
  }
}
