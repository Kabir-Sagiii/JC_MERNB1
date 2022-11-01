class Products {
  brandName;

  constructor(brandname) {
    this.brandName = brandname;
  }

  display() {
    console.log(this.brandName); //Apple PArent
  }
}

class Apple extends Products {
  // parent -child,  super --sub ,  Base  ----  Derived
  brandName;
  modelName;
  price;
  constructor(brandName, modelname, price) {
    super("Apple Parent"); // it will call constructor of the parent class
    this.modelName = modelname;
    this.brandName = brandName;
    this.price = price;
  }

  display() {
    super.display();
    console.log(this.modelName, this.price);
  }
}

var iphone13 = new Apple("Apple Child", "Iphone 13", 1200);

iphone13.display();
