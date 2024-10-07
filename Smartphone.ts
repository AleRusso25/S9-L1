
interface Smartphone {
    credito: number
    numeroChiamate: number

    ricarica(ammontare:number): void
    chiamata(minutiDurata: number): void
    get numero404(): number
    get getNumeroChiamate(): number
    azzeraChiamate(): void


}
class User implements Smartphone {
    name: string
    lastName: string
    credito: number
    numeroChiamate: number 
    constructor(name: string, lastName: string, credito: number, numeroChiamate: number ) {
        this.name = name
        this.lastName = lastName
        this.credito = credito
        this.numeroChiamate= numeroChiamate
    }
    ricarica(ammontare: number): void {
        this.credito += ammontare
    }
    }
    

const me = new User("lidia", "kovac", "5" , "2")
me.ricarica(10)
me.chiamata(1)



