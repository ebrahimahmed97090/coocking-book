import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnInit(): void {}
  onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }
}
