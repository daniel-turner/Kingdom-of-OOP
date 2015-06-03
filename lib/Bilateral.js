import Animal from './Animal.js';

export default class Bilateral extends Animal {

  _body;

  constructor(name,body) {

    super(name,"bilateral");

    this._body = body;
  };

  //getter

  get body() {

    return this._body;
  };

  //setter

  set body(update) {

    if( typeof update === "string") {

      this._body = update;
    }
  };

};