import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  MixingBatchClient,
  MixingBatchCreateItemDto,
  MixingBatchCreateMemberDto,
  MixingBatchDetailsDto
} from '../../core/api/api';
import {flatMap, tap} from "rxjs/operators";
import {MixingItem} from "./models";
import {Observable} from "rxjs";


@Component({
  selector: 'app-mixing',
  templateUrl: './mixing.component.html',
  styleUrls: ['./mixing.component.css']
})
export class MixingComponent implements OnInit {
  items: MixingItem[];
  batch: MixingBatchDetailsDto;

  constructor(private activatedRoute: ActivatedRoute, private mixingBatchClient: MixingBatchClient) {
    activatedRoute.params.pipe(
      flatMap(params => mixingBatchClient.get(params.id)),
      tap(batch => this.batch = batch),
      tap(batch => this.mapToItems(batch))
    ).subscribe();
  }


  mapToItems(batch: MixingBatchDetailsDto): void {
    const itemMap = new Map<number, MixingItem>();

    batch.members.forEach(member => {
      member.items.forEach(item => {
        if (!itemMap.has(item.recipe.id)) {
          itemMap.set(item.recipe.id, {
            recipeId: item.recipe.id,
            recipeName: item.recipe.name,
            amount: 0,
            completed: false,
          });
          itemMap.get(item.recipe.id).amount += item.amount;
        }
      });
    });
    this.items = [...itemMap.values()];
  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.save().subscribe();
  }

  save(): Observable<any> {
    const batch = this.batch;
    return this.mixingBatchClient.administerAbsolute(batch.id,
      this.batch.members
        .map(member => new MixingBatchCreateMemberDto({
          orderId: member.order.id,
          items: member.items.map(item => new MixingBatchCreateItemDto({
            amount: item.amount,
            recipeId: item.recipe.id
          }))
        }))
    ).pipe();
  }
}
