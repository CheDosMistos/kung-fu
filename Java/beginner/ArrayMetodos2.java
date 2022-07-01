import java.util.Scanner;

public class ArrayMetodos2 extends Exception{
    
    public static void main(String[] args) {
        int elementos = readSize();
        int[] numbers = assignValuesToElements(elementos);

        showArrayValues(numbers);
        showMaxValueInArray(numbers);       
    }

    private static int readSize() {
        Scanner sc = new Scanner(System.in);
        int e;

        do {
            System.out.println("¿Cuantos elementos tendrá el array?");
            e = sc.nextInt();
            if (e < 1) {
                System.out.println("Esa cantidad no es válida.");
            }
        } while (e < 1);
        
        return e;
    }
    
    private static int[] assignValuesToElements(int elements) {
        Scanner sc = new Scanner(System.in);
        int N[]    = new int[elements];

        for (int i = 0; i < N.length; i++) {
            System.out.print("Introduce el valor del "+ (i+1) +"º elemento de un total de "+ elements +": ");   
            N[i] = sc.nextInt();
        }

        return N;
    }

    private static void showArrayValues(int[] numbers) {
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " "); 
        }
        System.out.println();
    }

    private static void showMaxValueInArray(int[] numbers) {
        int max_value      = 0;
        int first_position = 0;

        for (int i = 0; i < numbers.length; i++) {
            if (max_value < numbers[i]) {
                max_value      = numbers[i];
                first_position = i;
            }
        }

        System.out.println("El valor más alto del array es "+ max_value +" y se encuentra en la "+ (first_position + 1) +"ª posición del array.");
    } 
}
