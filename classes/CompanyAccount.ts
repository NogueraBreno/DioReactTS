import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan_value: number): void => {
    this.deposit(loan_value)
    console.log('Voce pegou um empréstimo')
  }
}