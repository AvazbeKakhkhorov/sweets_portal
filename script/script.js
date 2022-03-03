$(function () {


 //-------- Regstratsion message-----------------------------

  let regs=document.querySelector(".regs");
  // let send=document.querySelector(".three").children[1];
  let form=$(".three form").children(1)
  let submit=form[1];
  let email=$("#Email");
  
  // console.log(email);


  submit.addEventListener('click', function (event) {
    
    event.preventDefault();

    if (($(this).val()=="SEND") && $("#Email").val()!="" ) {
      
      regs.style.top='0px';
      regs.style.transition='0.8s';
      email.css({boxShadow: "none"});   
    } else{
      email.css({boxShadow: "1px 1px  15px 5px red"});
    }

  });

  $(".regs svg").click(function() {
    regs.style.top='-60px';
    regs.style.transition='0.8s';
  })

// ------------------------------------------------------------------------------

 //--------INCREMENT(2-usuli)---------------------------------------------------------------

  let col_3=document.getElementsByClassName("col-3");
  
  for (let a = 0; a < col_3.length; a++) {
    const elements = col_3[a];
    // console.log(elements);
    let first=elements.children[1];
    let last=first.children[2];
    let adds=last.children[0];
    let plus=adds.children[2];
    
    
    plus.addEventListener('click', function(e){
        
      let Clicked=e.target;    
      // console.log(Clicked);
      let nol=Clicked.parentElement.children[1];
      let spanValue=+nol.innerText;
      // console.log(spanValue);
      let newValue=parseInt(spanValue)+1;
      // console.log(newValue);
      nol.innerText=newValue;
    // ____________________________________________
    
      let numCard=document.querySelector(".son-8");
      let sum=+numCard.innerText;
      let newSon=parseInt(sum)+1;
      numCard.innerText=newSon;

    })


  //_____ Korzinkachaga qo'shilayotgan malumotlar___________________________

    let choose=(first.children[0]).innerText;
    let narx=1;
    switch (choose) {
      case 'Carrot':narx=3.49;
        break;
      case 'Red Velvet':narx=4;
        break;
      case 'Mint Chip':narx=2.50;
        break;
      case 'Pink strawberry':narx=1.99;
        break;
      case 'Marshmallow':narx=2.2;
        break;
      case 'Dark Chocolate':narx=3.10;
        break;
      case 'Salty Caramel':narx=3.25;
        break;
      case 'Gluten Free Velvet':narx=3.50;
        break;
      case 'Cinnamon':narx=4.12;
        break;
      case 'Totally nuts':narx=2.10;
        break;
      case 'Pink Vanilla':narx=1.25;
        break;
      case 'Chococream':narx=4.20;
        break;
      default:
        break;
    }

      let rasm=elements.children[0];
      let imgText=rasm.attributes[0].textContent;
      let cardMain=document.querySelector(".main");
      
      let btnAdd=last.children[1];
      btnAdd.addEventListener('click', function(event) {
        let exent=event.target
        let foo=exent.parentElement.children[0];
        let count=foo.children[1];

        let cardMain=document.querySelector(".main");
      
        let steps=document.createElement("div");
        steps.setAttribute("class", "steps");
        let cols=document.createElement("div");
        cols.setAttribute("class", "cols");
        let span=document.createElement("span");
        
        steps.appendChild(cols);
        steps.appendChild(span);

        cols.innerHTML=`
          <img src=".${imgText}" alt="" />
          <p>${first.children[0].innerText}  x  ${count.innerText}</p>`;
        
        span.innerHTML="<span>$"+count.innerText*narx+"</span>";

        if (steps.children[0].innerText && count.innerText>0) {
          cardMain.append(steps);
          
        } else {
          
        }
        

        let summa=document.querySelector("#card .bottom");
        let bar=summa.children[0];
        let sumChild=bar.children[1];
        // console.log(sumChild);
        let sum=document.getElementsByClassName("steps");
        let num=0;
        for (let index = 0; index < sum.length; index++) {
          const elem = sum[index];
          // console.log(elem);
          let b=elem.children[1];

          b=b.innerText;
          let baz=b.slice(1, );
          baz=+baz;
          
          num=num+baz;
          sumChild.innerHTML="<span>$"+num+"</span>";
        
        }

      });

  }


//---------DECREMENT(2-usuli)--------------------------------------------------------- 

  for (let a = 0; a < col_3.length; a++) {
    const elements = col_3[a];
    // console.log(elements);
    let first=elements.children[1];
    let last=first.children[2];
    let adds=last.children[0];
    let minus=adds.children[0];
  
    minus.addEventListener('click', function(e){
        
      let Clicked=e.target;
      
      let nol=Clicked.parentElement.children[1];
      let spanValue=+nol.innerText;
      // console.log(spanValue);
      let newValue=parseInt(spanValue)-1;
      // console.log(newValue);
      

      let numCard=document.querySelector(".son-8");
      let sum=+numCard.innerText;
      let newSon=parseInt(sum)-1;
      
      if (newValue>=0) {
        nol.innerText=newValue;
        numCard.innerText=newSon;
      } else {
        nol.innerText;
        alert("0 dan kamaytirib bo'lmaydi ");
      }
    
    })

  }

 //------------------------------------------------------------------------- 

  // ------Responsive Navbar burger for Mobile device-----------------------------------------

    $(".burger").click( function() {

      $(".navbar ul").toggleClass("show");

      $(".navbar .burger rect").toggleClass("white");

    })

  // ------------------------------------------------------------------------



})

