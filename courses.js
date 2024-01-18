let flag=0;
function dropevent(){
    if(flag==0){
        document.getElementById("csedrop").style.display="inline-grid";
        flag=1;
    }
    else if(flag==1){
        document.getElementById("csedrop").style.display="none";
        flag=0;
    }
}