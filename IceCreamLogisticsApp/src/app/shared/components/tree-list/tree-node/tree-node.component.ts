import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  @Input()
  collapsed = true;
  parentTemplate: any;

  @ContentChild('head', {read: TemplateRef}) head: TemplateRef<any>;
  @ContentChild('content', {read: TemplateRef}) content: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
