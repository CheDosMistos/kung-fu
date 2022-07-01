import java.util.ArrayList;
import java.util.Scanner;

public class Coche {
    private String matricula;
    private String marca;
    private String modelo;
    private int Km;

    public int getKm() {
        return Km;
    }

    public void setKm(int Km) {                                                                                   
        this.Km = Km;
    }
 
    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("\nMatrícula: ");
        sb.append(matricula);
        sb.append("\nMarca: ");
        sb.append(marca);
        sb.append("\nModelo: ");
        sb.append(modelo);
        sb.append("\nKm: ");
        sb.append(Km);
        return sb.toString();
    }   
}


public class Basico1 {
    static Scanner sc = new Scanner(System.in);
    static ArrayList<Coche> coches = new ArrayList();

    public static void main(String[] args) {
        leerCoches();
        System.out.println("\nCoches introducidos: ");
        mostrarCoches();
        mostrarPorMarca();
        mostrarPorKm();
        System.out.println("\nCoche con mayor número de Km: " + mostrarMayorKm());
        System.out.println("\nCoches ordenados de menor a mayor número de Km");
        mostrarOrdenadosPorKm();
    }

    public static void leerCoches() {
        String matricula;
        String marca;
        String modelo;
        int Km;

        Coche aux;
        int i, N;

        do {
            System.out.print("Numero de coches? ");
            N = sc.nextInt();
        } while (N < 0);
        sc.nextLine();

        for (i = 0; i < N; i++) {
            System.out.println("Coche " + i);
            System.out.print("Matricula: ");
            matricula = sc.nextLine();
            System.out.print("Marca: ");
            marca = sc.nextLine();
            System.out.print("Model: ");
            modelo = sc.nextLine();
            System.out.print("Número de Kilómetros: ");
            Km = sc.nextInt();
            sc.nextLine();

            aux = new Coche();
        
            aux.setMatricula(matricula);
            aux.setMarca(marca);
            aux.setModelo(modelo);
            aux.setKm(Km);

            coches.add(aux);
            
        }
    }

    //Método para mostrar todos los coches   
    public static void mostrarCoches(){      
        for(int i = 0; i< coches.size(); i++)
            System.out.println(coches.get(i));  //se invoca el método toString de la clase Coche                  
    }

    //Método para mostrar todos los coches de una marca que se pide por teclado                                   
    public static void mostrarPorMarca(){
        String marca;
        System.out.print("Introduce marca: ");
        marca = sc.nextLine();
        System.out.println("Coches de la marca " + marca);
        for(int i = 0; i < coches.size(); i++){
            if(coches.get(i).getMarca().equalsIgnoreCase(marca))
                System.out.println(coches.get(i));
        }
    }

    //Método para mostrar todos los coches con un número de Km inferior                                           
    //al número de Km que se pide por teclado
    public static void mostrarPorKm(){
        int Km;
        System.out.print("Introduce número de kilómetros: ");
        Km = sc.nextInt();
        System.out.println("Coches con menos de " + Km + " Km");
        for(int i = 0; i < coches.size(); i++){
            if(coches.get(i).getKm() < Km)
                System.out.println(coches.get(i));
        }
    }

    //Método que devuelve el Coche con mayor número de Km                                                         
    public static Coche mostrarMayorKm(){
        Coche mayor = coches.get(0);
        for(int i = 0; i < coches.size(); i++){
            if(coches.get(i).getKm() > mayor.getKm())
                mayor = coches.get(i);
        }
        return mayor;
    }

    //Método que muestra los coches ordenados por número de Km de menor a mayor                                   
    public static void mostrarOrdenadosPorKm(){
        int i, j;
        Coche aux;
        for(i = 0; i < coches.size()-1; i++)
            for(j=0; j < coches.size()-i-1; j++)
                if(coches.get(j+1).getKm() < coches.get(j).getKm()){
                    aux = coches.get(j+1);
                    coches.set(j+1, coches.get(j));
                    coches.set(j, aux);                
                }
        mostrarCoches();
    }
}