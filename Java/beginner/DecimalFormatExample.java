import java.text.DecimalFormat;

public class DecimalFormatExample {
    public static void main(String[] args) {
        double n = 1234565.3;
        // String patron = "#,###.##";
        String patron = "000000000.000";
        //String patron = "00.000E00";
        DecimalFormat formato = new DecimalFormat(patron);
        System.out.println(formato.format(n));

    }
}
