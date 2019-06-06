import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NdExampleViewerBodyComponent } from './example-viewer-body/example-viewer-body.component';
import { NdExampleViewerComponent } from './example-viewer/example-viewer.component';

const COMPONENTS = [
  NdExampleViewerComponent
];

const DIRECTIVES = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    NdExampleViewerBodyComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class _NdShareModule { } // tslint:disable-line:class-name
