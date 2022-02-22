interface Personaje{
    nombre: String;
    nacimiento:Date;
    Profesicon:string;

}

var brandPitt: Personaje;

brandPitt = {
    nombre:"Hola Soy bradPitt",
    Profesicon:"Actor",
    nacimiento:new Date('01/10/1990')
}



console.log(brandPitt)