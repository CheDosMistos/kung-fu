import java.util.Scanner;

public class DobleTriple {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Dime un número, capullo.");
        int number = sc.nextInt();
        System.out.println("El doble de "+ number +" es "+ number*2 +" y el triple es "+ number*3);
    }    
}
