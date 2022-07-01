import java.util.Scanner;

public class Ejemplo3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String nombre, direccion;
        int edad;

        System.out.print("Introduce tu nombre: ");
        nombre = sc.nextLine(); // Leer el nombre
        System.out.print("Introduce tu edad: ");
        edad = sc.nextInt();    // Leer la edad
        sc.nextLine();  // Limpia el buffer de entrada (quita el retorno de carro que dejo nextInt)
        System.out.print("Introduce tu dirección: ");
        direccion = sc.nextLine();  // Leer la dirección
        System.out.println("Datos introducidos");
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Dirección: " + direccion);
    }    
}
