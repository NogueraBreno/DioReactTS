import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    deposit = (deposit_value: number): void => {
        this.setBalance(deposit_value + 10)
        console.log('Voce depositou')
      }
}
