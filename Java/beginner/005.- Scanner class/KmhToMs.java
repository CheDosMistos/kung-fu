import java.util.Scanner;

public class KmhToMs {
    private static double kmh;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Dime una velicidad en Km/h");
        kmh = sc.nextDouble();
        double ms = kmh / 3.6D;
        System.out.println(kmh + " Km/h son " + ms + " metros por segundo.");
    }
}
