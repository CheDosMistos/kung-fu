import java.io.IOException;

public class EjemploLecturaChar {
       public static void main(String[] args) throws IOException {
              char caracter;
              System.out.print("Introduce un carácter: ");
              caracter = (char)System.in.read();
              System.out.println("Carácter introducido -> " + caracter);                                          
       }
}