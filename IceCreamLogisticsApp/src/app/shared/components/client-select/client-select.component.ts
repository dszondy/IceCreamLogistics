import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of, Subscriber} from 'rxjs';
import {AuthClient, Client, ClientClient} from '../../../core/api/api';
import {map, mergeMap} from "rxjs/operators";
import {TypeaheadMatch} from "ngx-bootstrap/typeahead";
import {AuthService} from '../../../core/security/auth.service';

@Component({
  selector: 'app-client-select',
  templateUrl: './client-select.component.html',
  styleUrls: ['./client-select.component.css']
})
export class ClientSelectComponent implements OnInit {
  searchInProgress = true;

  @Input()
  selectedClient: Client;
  @Output()
  selectedClientChange = new EventEmitter<Client>();

  @Input()
  locked = false;

  clients: Observable<Client[]>;
  typeaheadLoading?: boolean;
  asyncSelected?: string;

  constructor(private clientClient: ClientClient, private authClient: AuthClient) {
    this.authClient.getCurrentUser().subscribe(user => {
      if (user.client) {
        this.selectedClient = user.client;
        this.clients = of([]);
        this.locked = true;
        this.searchInProgress = false;
        this.selectedClientChange.emit(user.client);
      }
    });
    this.clients = new Observable((observer: Subscriber<string>) => {
      observer.next(this.asyncSelected);
    })
      .pipe(
        mergeMap((token: string) => this.getClientsAsObservable(token))
      );
  }

  ngOnInit(): void {
    if (this.selectedClient) {
      this.asyncSelected = this.selectedClient.name;
    }
  }

  startSearch() {
    this.searchInProgress = true;
  }

  getClientsAsObservable(token: string): Observable<Client[]> {
    return this.clientClient.get(0, 10, token)
      .pipe(map(client => client.content));
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  onClientSelected($event: TypeaheadMatch): void {
    this.selectedClient = $event.item;
    this.searchInProgress = false;
    this.selectedClientChange.emit(this.selectedClient);
  }
}
