public class PasarArrayMetodo {
    public static void main(String[] args) {
        int [] n = new int[5];
        for (int i = 0; i < n.length; i++) {
            System.out.print(n[i] + " ");
        }
        System.out.println();
        inicializar(n);
    
        for (int i = 0; i < n.length; i++) {
            System.out.print(n[i] + " ");
        }
    }

    public static void inicializar(int [] x) {
        for (int i = 0; i < x.length; i++) {
            x[i] = i * 2;
        }
    }
}
