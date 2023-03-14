public class RealMadrid {
    public static void main(String[] args) {
        System.out.print("Hello Real Madrid\n");
        int arr23[] = {0,1,2,3,4,5};
        int length23 = arr23.length;
        int sum = 0;
        for(int i=0; i<arr23.length; i++) {
            sum = sum + arr23[i];
        }
        System.out.println("sum = "+sum);
    }
}