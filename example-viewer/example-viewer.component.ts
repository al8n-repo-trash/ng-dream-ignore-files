import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nd-example-viewer',
  exportAs: 'ndExampleViewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {style: 'width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;'}
})

export class NdExampleViewerComponent implements OnInit {
  @Input() exampleName: string;

  public sourceCode: boolean = false;

  constructor(

  ) { }

  ngOnInit() {
  }

  showSourceCode() {
    this.sourceCode = !this.sourceCode;
  }
}
