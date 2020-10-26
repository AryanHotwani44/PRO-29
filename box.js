class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.body = Bodies.rectangle(x,y,width,height,options);
    }
  
  };
  