import java.util.Scanner;

public class Ejemplo1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String nombre;
        double radio;
        int n;

        System.out.print("Introduzca su nombre: ");
        nombre = sc.nextLine(); // leer un String
        System.out.println("Hola " + nombre + "!!!");

        System.out.print("Introduzca el rádio de la circunferenca: ");
        radio = sc.nextDouble();    // Leer un double
        System.out.println("Longitud de la circunferencia: " + 2*Math.PI*radio);

        System.out.print("Intrduzca un número entero: ");
        n = sc.nextInt(); // Leer un entero
        System.out.println("El cuadrado es: " + Math.pow(n, 2));
    }
}
