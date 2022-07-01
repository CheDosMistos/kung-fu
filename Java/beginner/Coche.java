

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