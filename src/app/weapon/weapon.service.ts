export class WeaponService {
  public readonly type: string;
  constructor(range: number) {
    this.type = range === 0 ? 'melee' : 'range';
  }
}
