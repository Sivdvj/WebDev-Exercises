function calculate(){
    let adult=10;
    let child=5;
    let x=parseInt(document.getElementById("t1").value);
    let y=parseInt(document.getElementById("t2").value);
    let result=x*adult+y*child;
    document.getElementById("total").value="₹"+result;
}