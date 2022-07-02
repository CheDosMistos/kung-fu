import java.util.*;

public class PowerRiser{
    public static void main(String[] args) {
        int number;
        do {
            System.out.print("Enter a whole number >= 0\n");
            Scanner inquirer = new Scanner(System.in);
            number = inquirer.nextInt();
        } while (number < 0);
        inquirer.close();
        System.out.println("2 ^ "+ number + " = " + raise2to(number));
    }

    public static double raise2to(int number) {
        if (number > 0) {
            return 2 * raise2to(number - 1);
        }
        return 1;
    }
}