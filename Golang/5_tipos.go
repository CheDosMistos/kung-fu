package main

import ("fmt";"strconv")	// fmt     : Libreria de escribir en pantalla
                           	// strconv : Libreria de convertir tipos de datos

func main() {
	age := "22"            			// := es como el = pero asigan el tipo automaticamente de la variable (solo para iniciar variables) 
	age_int,_ := strconv.Atoi(age)	// función Atoi de la libreria retorna 2 valores
	                               	// _ es una variable "sandbox", valor que metes valor que se pierde

	fmt.Println("Mira tu que cosas, si sumas "+ age +" y 10 es " + strconv.Itoa(age_int + 10));
}