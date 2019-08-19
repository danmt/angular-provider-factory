import { InjectionToken } from '@angular/core';
import { weaponServiceFactory } from './weapon-service.factory';
import { WeaponService } from './weapon.service';

export const Range = new InjectionToken<number>('Range');

export function weaponProviderFactory(range = 0) {
  return [
    {
      provide: WeaponService,
      useFactory: weaponServiceFactory,
      deps: [Range]
    },
    {
      provide: Range,
      useValue: range
    }
  ];
}
