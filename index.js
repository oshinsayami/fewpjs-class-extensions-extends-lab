// Your code here

class Polygon {
    constructor(arr){
        this.arr = arr
    }

    get countSides(){
        return this.arr.length
    }

    get perimeter(){
        return this.arr.reduce(function(a,b){
            return a+b;
        },0);
    }

   
}

class Triangle extends Polygon{
    get isValid(){
        let a = this.arr[0]
        let b= this.arr[1]
        let c = this.arr[2]
        if ((a + b > c) && (b + c >a) && (a +c > b))
        return true
        else
        return false
    }
}

class Square extends Polygon{

    get isValid(){
        let a = this.arr[0]
        let b= this.arr[1]
        let c = this.arr[2]
        let d = this.arr[3]
        if ((a===b) && (b===c) && (c === d))
        return true
        else 
        return false
    }

    get area(){
        return this.arr[0] ** 2
    }
}