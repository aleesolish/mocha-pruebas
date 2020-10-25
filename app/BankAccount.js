module.exports = class bankAcc{

  
  constructor(balance, history){
        this.balance = balance
        this.historial = []
    }

    getbalance(){
        return this.balance
    }

    append(monies){
        if (monies < 0){
            return ("That's not possible")
        }
        else{
            this.balance += monies
            this.historial.push(monies)
        }
        return this.balance
    }

    substract(monies){
      if (monies < 0){
          return ("That's not possible")
      }
      else{
          this.balance -= monies
          this.historial.push(monies)
      }
      return this.balance
  }


  merge(other){
    this.historial = this.historial.concat(other.historial)
    return (this.balance + other.balance)

  }

  historial_file(){
    return this.historial
  }
  
}
