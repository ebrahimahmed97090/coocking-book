import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coocking-book';

  loadedFeature = 'recipe';
  // tslint:disable-next-line: typedef
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
