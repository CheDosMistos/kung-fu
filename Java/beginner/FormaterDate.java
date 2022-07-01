import java.time.LocalDateTime;

public class FormaterDate {
    public static void main(String[] args) {
        
        LocalDateTime now = LocalDateTime.now();
        String date = String.format("%tA %<td de %<tB de %<tY %<tr", now);
        System.out.println(date);
        
        System.out.println("------------------");

        String test = String.format("| x-> %-10d |%n" , 7);
        test       += String.format("| y-> %-10d |%n" , -123056);
        test       += String.format("| z-> %+010d |%n", 559);
        test       += String.format("| k-> %+010d |%n", -99311);
        System.out.print(test);
    }
}
