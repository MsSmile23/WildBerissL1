// Задача на классы и наследование: создайте базовый класс Shape (фигура), 
// который имеет методы для расчета площади и периметра. Затем создайте подклассы, 
// представляющие различные фигуры, такие как прямоугольник, круг и треугольник. 
// Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
    getSquare = (squr) => {
        console.log(`Площадь ${this.name} равняется ${squr}`);
    }
    getPerim = (perim) => {
        console.log(`Периметр ${this.name} равняется ${perim}`);
    }
}

class Rectangle extends Shape {
    name = 'прямоугольник'
    calculateSquare = (a,b) => this.getSquare((a * b));
    calculatePerim = (a,b) => this.getPerim((2 * (a + b)));
}

class Triangle extends Shape {
    name = 'треугольник';
    calculateSquare = (a,b,c) => {
        const S = (a + b + c)/ 2
        this.getSquare(Math.sqrt(S * (S - a) * (S - b) * (S - c)))};
    calculatePerim = (a,b,c) => this.getPerim((a + b + c));
}

class Circle extends Shape {
    name = 'круг'
    calculateSquare = (rad) => {this.getSquare((Math.round(Math.PI * rad ** 2)))};
    calculatePerim = (rad) => {this.getPerim((Math.round(2 * Math.PI * rad)))};
}

const rect = new Rectangle();
rect.calculatePerim(3,4)
