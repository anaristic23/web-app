import { Aurelia } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";
import { registerUser } from "./services/registerUser";

export class App {
  public name: string = "";
  public surname: string = "";
  public email: string = "";


  public validate() {
    if (this.name ==="" || this.surname === "") {
      alert("All fields are required!");
      return false;
    }
    return true;
  }

  public register() {
    if (!this.validate()) {
      return;
    }

    registerUser(this.name, this.surname, this.email).then(result =>
      console.log(result)
    );
  }
}
