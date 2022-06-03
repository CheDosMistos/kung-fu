package main

import("fmt";"bufio";"os")

func main() {
	fmt.Print("Hola mundo")
	fmt.Println("Hola mundo")

	age :=22
	fmt.Printf("mi edad es: %d\n", age)

	name := "Mallo"
	fmt.Printf("mi edad es: %v\n", name)

	valid := true
	fmt.Printf("¿Es cierto? %f\n", valid)

	//%e %b %s

	var secondAge int

	fmt.Println("Excribe tu edad: ")
	fmt.Scanf("%d\n", &secondAge)
	fmt.Printf("Mi edad es: %d\n", secondAge)

	// -------------------
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Escribe tu nombre: ")
	text,err := reader.ReadString('\n')

	if err == nil {
		fmt.Println("Hola " + text)
	} else {
		fmt.Println(err)
	}


}