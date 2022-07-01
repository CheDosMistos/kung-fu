import java.util.Scanner;
public class ShowInts {
    public static void main(String[] args) {
        int number_a, number_b;
        Scanner sc = new Scanner(System.in);

        System.out.println("Introduce los 2 números enteros separados por un espacio: ");
        number_a = sc.nextInt();
        number_b = sc.nextInt();
        sc.nextLine();
 
        System.out.println("Los 2 número enteros son: " + number_a + " y " + number_b);
    }
}
