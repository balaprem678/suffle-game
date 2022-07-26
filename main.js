var letter1=document.getElementById("letter1")
var letter2=document.getElementById("letter2")
var letter3=document.getElementById("letter3")
var letter4=document.getElementById("letter4")
var letter5=document.getElementById("letter5")
var letter6=document.getElementById("letter6")
var suffle=document.getElementById("suffle")
sf.addEventListener("click",suffle)
r=["P","L","A","Y","I","T"]

function suffle(){
    var P=Math.floor((Math.random())*(r.length))
    var L=Math.floor((Math.random())*(r.length))
    var A=Math.floor((Math.random())*(r.length))
    var Y=Math.floor((Math.random())*(r.length))
    var I=Math.floor((Math.random())*(r.length))
    var T=Math.floor((Math.random())*(r.length))
   // var previous=a
    
    
    
        
    function toFindDuplicates() {
        let arry = [P,L];//,A,Y,I,T
        let resultToReturn = false;
        // call some function with callback function as argument
        resultToReturn = arry.some((element, index) => {
            return arry.indexOf(element) !== index
        });
        if (resultToReturn) {
          {
            console.log('Duplicate elements exist');
             P=Math.floor((Math.random())*(r.length))
             L=Math.floor((Math.random())*(r.length))
            //  A=Math.floor((Math.random())*(r.length))
            //  Y=Math.floor((Math.random())*(r.length))
            //  I=Math.floor((Math.random())*(r.length))
            //  T=Math.floor((Math.random())*(r.length))
            }
            }
            else {
                letter1.innerText=r[P];
                letter2.innerText=r[L];
                letter3.innerText=r[A];
                letter4.innerText=r[Y];
                letter5.innerText=r[I];
                letter6.innerText=r[T];
                
                }
            }
    
            toFindDuplicates()
    


    // nm3.style.setProperty("color",r[s] );
    console.log(s)
    //console.log(Math.floor(Math.random()*4))
}


