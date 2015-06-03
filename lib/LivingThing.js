export default class LivingThing {

  _name;
  _uniCellular;
  _trueNucleus;
  _anaerobic;
  _asexual;
  _mobile;

  constructor (name,uniCellular,trueNucleus,anaerobic,asexual,mobile) {

    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  };

  // getters
  get name() {

    return this._name;
  };

  get uniCellular() {

    return this._uniCellular;
  };

  get multiCellular() {

    return !this._uniCellular;
  };

  get eukaryote() {

    return this._trueNucleus;
  };

  get prokaryote() {

    return !this._trueNucleus;
  };

  get anaerobic() {

    return this._anaerobic;
  };

  get aerobic() {

    return !this._anaerobic;

  };

  get asexual() {

    return this._asexual;
  };

  get sexual() {

    return !this._asexual;
  };

  get mobile() {

    return this._mobile;
  };

  get immobile() {

    return !this._mobile;
  };

  //setters
  set name(update) {

    if( typeof update === "string") {

      this._name = update;
    }
  };

  set uniCellular(update) {

    if( typeof update === "boolean") {

      this._uniCellular = update;
    }
  };

  set multiCellular(update) {

    this._uniCellular = !update;
  };

  set eukaryote(update) {

    if( typeof update === "boolean") {

      this._trueNucleus = update;
    }
  };

  set prokaryote(update) {

    this._trueNucleus = !update;
  };

  set anaerobic(update) {

    if( typeof update === "boolean") {

      this._anaerobic = update;
    }
  };

  set aerobic(update) {

    this._anaerobic = !update;
  };

  set asexual(update) {

    if( typeof update === "boolean") {

      this._asexual = update;
    }
  };

  set sexual(update) {

    this._asexual = !update;
  };

  set mobile(update) {

    if( typeof update === "boolean") {

      this._mobile = update;
    }
  };

  set immobile(update) {

    this._mobile = !update;
  };

};