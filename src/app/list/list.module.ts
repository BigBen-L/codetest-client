import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
export const ROUTES = [{ path: '', component: ListComponent }];


@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), FormsModule]
})
export class ListModule {}
