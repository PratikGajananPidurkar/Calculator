class Rectangle {
    private double width;
    private double length;
    private double area;
    private String color;

    public Rectangle(double width, double length, String color) {
        this.width = width;
        this.length = length;
        this.color = color;
        this.area = width * length;
    }

    public double getWidth() {
        return width;
    }

    public double getLength() {
        return length;
    }

    public double getArea() {
        return area;
    }

    public String getColor() {
        return color;
    }

    public boolean matches(Rectangle other) {
        return this.area == other.getArea() && this.color.equals(other.getColor());
    }
}

public class RectangleComparison {
    public static void main(String[] args) {
        Rectangle rectangle1 = new Rectangle(5.0, 10.0, "Blue");
        Rectangle rectangle2 = new Rectangle(10.0, 5.0, "Blue");

        if (rectangle1.matches(rectangle2)) {
            System.out.println("Matching rectangles.");
        } else {
            System.out.println("Non-matching rectangles.");
        }
    }
}
