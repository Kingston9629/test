class Groundy {
constructor(x, y) {
    var options = {
        isStatic:false
    }
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
}
display(){

}
};