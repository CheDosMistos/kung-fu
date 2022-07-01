import java.util.Scanner;

public class Ejemplo2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N;
        do {
            System.out.print("Intriduce un número entero positivo: ");
            while (!sc.hasNextInt()) {
                System.out.println("Valor no válido");
                sc.next();
                System.out.print("Introduce un número entero positivo: ");
            }
            N = sc.nextInt();
            if (N <= 0) {
                System.out.println("El número debe ser positivo.");
            }
        } while (N <= 0);
        System.out.println("Número introducido: " + N);
    }    
}
