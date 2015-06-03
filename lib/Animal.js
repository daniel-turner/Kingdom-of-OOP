import Eukaryota from './Eukaryota.js';

export default class Animal extends Eukaryota {

  _symmetry;

  constructor(name,symmetry) {

    super(name,false,false,true,true);

    this._symmetry = symmetry;
  };

  //getter
  get symmetry() {

    return this._symmetry;
  };

  //setter

  set symmetry(update) {

    if( typeof update === "string") {

      this._symmetry = update;
    }
  };

};