import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FeaturePage } from '@app-shell/features/feature-page';

@Component({
  selector: 'app-browser-state-pages-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  template: `
    <ui-feature-page pageName="About Browser State">
      <p>Browser State Home Page</p>
    </ui-feature-page>
  `,
  styles: ``,
})
export class HomePage {}
