class peekelement {
    constructor() {
        this.array = [5,87,2,13,14,32,6,3,15,78,9,10,]
    }
    findmax() {
        let max = this.array[0];
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] > max)
                max = this.array[i];
        }
        console.log(max);
    }
}
let data = new peekelement();
data.findmax()