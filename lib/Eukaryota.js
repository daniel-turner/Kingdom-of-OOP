import LivingThing from './LivingThing.js';

export default class Eukaryota extends LivingThing {

  _heterotroph;

  constructor(name,uniCellular,asexual,mobile,heterotroph) {

    super(name,uniCellular,true,false,asexual,mobile);

    this._heterotroph = heterotroph;
  };

  //getters

  get heterotroph() {

    return this._heterotroph;
  };

  get autotroph() {

    return !this._heterotroph;
  };

  //setters

  set heterotroph(update) {

    if( typeof update === "boolean") {

      this._heterotroph = update;
    }
  };

  set autotroph(update) {

    this._heterotroph = !update;
  };

};