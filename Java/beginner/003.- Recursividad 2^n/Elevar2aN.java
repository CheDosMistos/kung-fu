import java.util.*;

public class Elevar2aN{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numero;

        do {
            System.out.print("Introduce un número entero >= 0\n");
            numero = sc.nextInt();
        } while (numero < 0);
        sc.close();
        System.out.println("2 ^ "+ numero + " = " + potencia(numero));
    }

    public static double potencia(int n) {
        if (n > 0) {
            return 2 * potencia(n - 1);
        } else {
            return 1;
        }
    }
}