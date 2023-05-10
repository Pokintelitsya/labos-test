import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as env } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private readonly apiUrl = env.apiURL;

  constructor(private httpClient: HttpClient) {}

  get<T>(path, options?: any): Observable<T> {
    return this.httpClient.get<T>(
      `${this.apiUrl}${path}`,
      options
    ) as unknown as Observable<T>;
  }
}
