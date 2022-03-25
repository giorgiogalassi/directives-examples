import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ggShowHide]',
})
export class ShowHideDirective {
  private _hasView: boolean = false;

  @Input() set ggShowHide(condition: boolean) {
    if (condition && !this._hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this._hasView = true;
    } else {
      this.viewContainer.clear();
      this._hasView = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
