import { WeaponService } from './weapon.service';

export function weaponServiceFactory(range: number) {
  return new WeaponService(range);
}
