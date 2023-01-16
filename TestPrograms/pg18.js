function outerFun(){
    console.log(arguments);
    let innerFun = ()=>{
        console.log(arguments);
    }
    innerFun("Hello","Coder")
}
outerFun("Welcome","to","Scaler","Academy");