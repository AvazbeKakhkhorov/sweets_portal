// ------------------- MODAL ----------------------------------------------------------------

document.getElementById("out").onclick=()=> {
    let inps=document.querySelectorAll("input");

    if (inps.value != "") {
        document.getElementById("Mymodal").style.display="block";
        inps.style.boxShadow="none";
    } else {
        inps.style.boxShadow="1px 1px  15px 5px red";
    }
    
}
  

  window.onclick=(e)=> {

    let Mymodal=document.getElementById("Mymodal");
    let svgX=document.getElementById("svg-delete");
    // console.log(e.target);

    if (Mymodal==e.target) {
      Mymodal.style.display="none";

    } else if (svgX==e.target) {
      Mymodal.style.display="none";
    }
  }

  
  // ---------  <SUMMA> ----------------------------------------
  let Rows=document.getElementsByClassName("rows");
  
  let Massiv=[];

  for (let index = 0; index < Rows.length; index++) {
    const elementRows = Rows[index];
    Massiv.push(elementRows);
    
  }


  let ito=27.92;
  let cost=document.querySelector(".cost");
  let cost2=document.querySelector(".cost2");

  Massiv.forEach((sar) => {

    let head=sar.children[0];
    let body=head.children[0];
    // console.log(body);


    body.addEventListener("change", () => {
      let fer=sar.children[2].innerText;
      console.log(fer);

      let no;
      switch (fer) {
        case '$0':no=0;
          break;
        case '$9.90':no=9.90;
          break;
        case '$12.90':no=12.90;
          break;
        default:
          break;
      }
      let dar=ito+no;

      cost.innerHTML="<span class='cost'>$"+dar+"</span>";
      cost2.innerHTML="<span class='cost2'>$"+dar+"</span>";
      
     })

  })
   
    
  