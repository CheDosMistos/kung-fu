import java.util.Random;
import java.util.Scanner;

public class ArrayMetods {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int elementos;

        do {
            System.out.println("De cuantos elementos debe ser el array?");
            elementos  = sc.nextInt();
            if (elementos < 1) {
                System.out.println("el valor introducido no es válido.");
            }
        } while (elementos < 1);

        int [] numeros = crearArray(elementos);
        
        for (int i = 0; i < numeros.length; i++) {
            System.out.print(numeros[i] + " ");
        }
    }

    public static int[] crearArray(int N) {
        Random rnd = new Random();
        int [] A   = new int[N];

        for (int i = 0; i < A.length; i++) {
            A[i] = rnd.nextInt(10) + 1;
        }
        return A;
    }
}