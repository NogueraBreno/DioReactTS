import { CompanyAccount } from './classes/CompanyAccount'
import { PeopleAccount } from './classes/PeopleAccount'
import { SpecialAccount } from './classes/SpecialAccount'


console.log("Conta Pessoal abaixo!")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(150)
console.log("Conta Empresarial abaixo!")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
console.log("Conta Especial abaixo!")
const specialAccount: SpecialAccount = new SpecialAccount('Uni', 42)
specialAccount.deposit(400)
console.log(specialAccount)