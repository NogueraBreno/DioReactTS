export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
    }
  
    setName = (name: string): void => {
      this.name = name
      console.log('Nome alterado com sucesso!')
    }
  
    getName = (): string => {
      return this.name
    }

    deposit = (deposit_value: number): void => {
      if(this.validateStatus()){
        this.setBalance(deposit_value)
        console.log('Voce depositou')
      }
    }
  
    withdraw = (withdraw_value: number): void => {
        if(this.validateStatus() && this.checkBalance(withdraw_value)){
            console.log("Valor sacado com successo!")
        }
    }
    
    setBalance = (balance: number): void => {
        this.balance += balance
    }  
    
    getBalance = (): void => {
      console.log(this.balance)
    }
  
    private validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }

    private checkBalance = (withdraw_value: number): boolean => {
        if (withdraw_value <= this.balance) {
          return true
        }
    
        throw new Error('Valor de saque inválido.')
    }
  }