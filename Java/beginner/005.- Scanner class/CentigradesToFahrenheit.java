import java.util.Scanner;
/**
 * CentigradesToFahrenheit
 */
public class CentigradesToFahrenheit {
    private static double centigrades;
    private static double fahrenheit;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Dime los grados Centígrados que te los paso a Fahrenheit");
        centigrades = sc.nextDouble();
        
        // F = 32 + ( 9 * C / 5)
        fahrenheit = 32 + ( 9*centigrades/5);

        System.out.println(centigrades + "ºC equivalen a "+ fahrenheit + " grados Fahrenheit");
    }
}