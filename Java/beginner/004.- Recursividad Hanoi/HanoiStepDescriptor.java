import java.util.*;
public class HanoiStepDescriptor {
    public static void main(String[] args) {
        System.out.println("Numero de discos: ");
        Scanner inquirer = new Scanner(System.in);
        int totalDisks = inquirer.nextInt();
        describeHanoiSteps(totalDisks,1,2,3);                                                        
    }

    public static void describeHanoiSteps(int totalDisks, int origin,  int auxiliary, int target) {
        if(totalDisks==1) {
           System.out.println("Mover disco de " + origin + " a " + target);
        } else {
           describeHanoiSteps(totalDisks-1, origin, target, auxiliary);
           System.out.println("Mover disco de "+ origin + " a " + target);
           describeHanoiSteps(totalDisks-1, auxiliary, origin, target);
        }
    }
}