import { Component, OnInit } from '@angular/core';
import { weaponProviderFactory } from './weapon/weapon-provider.factory';
import { WeaponService } from './weapon/weapon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [weaponProviderFactory(5)]
})
export class AppComponent implements OnInit {
  weaponType: string;

  constructor(private _weaponService: WeaponService) {}

  ngOnInit() {
    this.weaponType = this._weaponService.type;
  }
}
