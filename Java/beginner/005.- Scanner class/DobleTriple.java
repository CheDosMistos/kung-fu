import java.util.Scanner;

public class DobleTriple {
    public static void main(String[] args) {
        int numero;
        Scanner sc = new Scanner(System.in);

        System.out.println("Dime un número, capullo.");
        numero = sc.nextInt();
        System.out.println("El doble de "+ numero +" es "+ numero*2 +" y el triple es "+ numero*3);
    }    
}
