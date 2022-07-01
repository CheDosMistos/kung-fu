import javax.swing.JOptionPane;

/**
 * EjemploJOptionPane
 */
public class EjemploJOptionPane {

    public static void main(String[] args) {
        String nombre = "";
        nombre = JOptionPane.showInputDialog("¿Cómo te llamas?");
        String msg = "Hi! " + nombre + ", nice to meet U.";
        JOptionPane.showMessageDialog(null, msg);
    }
}