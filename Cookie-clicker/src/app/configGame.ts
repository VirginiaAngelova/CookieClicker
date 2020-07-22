import { Cursor } from './Cursor'
import { Grandma } from './Grandma';
import { Farm } from './Farm';
import { Mine } from './Mine';
import { TimeBoost } from './TimeBoost';

export class ConfigGame {

    public cookies: number = 1000;

    public upgradeCursor: Cursor[] = [];
    public upgradeGrandma: Grandma[] = [];
    public upgradeFarm: Farm[] = [];
    public upgradeMine: Mine[] = [];
    public upgradeTimeBoost: TimeBoost[] = [];
}
