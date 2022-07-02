import java.util.Scanner;

public class Adder {
    public static void main(String[] args) {
        Scanner inquirer = new Scanner(System.in);
        int numbers[] = new int[2];
        System.out.print("Introduce primer número: ");                                             
        numbers[0] = inquirer.nextInt();
        System.out.print("Introduce segundo número: ");
        numbers[1] = inquirer.nextInt();
        System.out.println("Suma: " + calculate(numbers));
    }

    public static int calculate(int numbers[]) {
        return numbers[0] + numbers[1];
    }
}