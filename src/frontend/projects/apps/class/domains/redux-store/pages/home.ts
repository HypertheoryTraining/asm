import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FeaturePage } from '@app-shell/features/feature-page';

@Component({
  selector: 'app-redux-store-pages-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  template: `
    <ui-feature-page pageName="About Redux Store">
      <p>Redux Store Home Page</p>
    </ui-feature-page>
  `,
  styles: ``,
})
export class HomePage {}
