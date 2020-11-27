import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
/*
import { PdfViewerComponent } from 'ng2-pdf-viewer';
*/

import { IonicModule } from '@ionic/angular';

import { KeywordsHomePage } from './keywords-home.page';
import {DocumentDetailComponent} from '../document-detail/document-detail.component';
import {NewsHomePage} from '../../app-news/news-home/news-home.page';

const routes: Routes = [
  {
    path: '',
    component: KeywordsHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PdfViewerModule
  ],
  declarations: [KeywordsHomePage,DocumentDetailComponent],
  entryComponents:[DocumentDetailComponent]

})
export class KeywordsHomePageModule {}
