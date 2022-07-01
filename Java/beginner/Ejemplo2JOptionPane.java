import javax.swing.JOptionPane;

public class Ejemplo2JOptionPane {
    public static void main(String[] args) {
        int n1,n2,suma;
        String mensaje;

        // Lo retornado por JOptionPane.showInputDialog() es siempre de tipo string 
        // Por lo que hay que parseInt()

        mensaje = JOptionPane.showInputDialog(null, "Introduce el primer int");
        n1 = Integer.parseInt(mensaje); 
        mensaje = JOptionPane.showInputDialog(null, "Introduice el segundo int");
        n2 = Integer.parseInt(mensaje);

        suma = n1+n2;

        JOptionPane.showMessageDialog(null, n1 +" + "+ n2 +" = "+ suma);
    }
}
