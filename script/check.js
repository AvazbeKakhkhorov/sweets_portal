let asosShows=document.getElementsByClassName("shows");
  // console.log(asosShows);
  const array=[];

  for (let x = 0; x < asosShows.length; x++) {
    const Element = asosShows[x];
    array.push(asosShows[x]);
    // console.log(Element);
    let ikki=Element.children[1];
    let uch=ikki.children[0];
    let increment=uch.children[2];
  

    // console.log(increment);
    increment.addEventListener('click', function () {
      let son=uch.children[1];
      let num=+son.innerText;
      // console.log(num);
      let newnumber=parseInt(num)+1;
      son.innerText=newnumber;
      // console.log(newnumber);

      let numCard=document.querySelector(".son-8");
      let sum=+numCard.innerText;
      let newSon=parseInt(sum)+1;
      numCard.innerText=newSon;


      let foo=Element.children[0];
      let choose=(foo.children[1]).innerText;
      let narx=1;
      switch (choose) {
        case 'Carrot':narx=3.49;
          break;
        case 'Red Velvet':narx=4.0;
          break;
        case 'Mint Chip':narx=2.50;
          break;
        case 'Pink Strawberry':narx=1.20;
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
        case 'Totally nuts':narx=2.1;
          break;
        case 'Pink Vanilla':narx=1.25;
          break;
        case 'Chococream':narx=4.2;
          break;
        default:
          break;
      }

      if (son.innerText>0) {
        ikki.children[1].innerHTML=`$${son.innerText*narx}`;
      }
      

      let vip=document.getElementById("narxi");
      let fun=0;
      const arrayNarx=[];
      array.forEach((foo)=> {
        // console.log(foo);
        let a=foo.children[1];
        let b=a.children[1];
        let c=b.innerText;
        c=c.slice(1, );
        let hand=Number(c)
        // console.log(hand);
        arrayNarx.push(hand);
        fun=fun+hand;
      })
      console.log(fun);
      vip.innerHTML="<span id='narxi'>$"+fun+"</span>";
      
    })
    
  }

  
  // const arrayNarx=[];
  // array.forEach((foo)=> {
  //   // console.log(foo);
  //   let a=foo.children[1];
  //   let b=a.children[1];
  //   let c=b.innerText;
  //   c=c.slice(1, );
  //   let hand=Number(c)
  //   // console.log(hand);
  //   arrayNarx.push(hand)
  // })
  // console.log(arrayNarx);



  for (let x = 0; x < asosShows.length; x++) {
    const Element = asosShows[x];
    // console.log(Element);
    let ikki=Element.children[1];
    let uch=ikki.children[0];
    let decrement=uch.children[0];

    decrement.addEventListener('click', function () {
        let son=uch.children[1];
        let num=+son.innerText;
        // console.log(num);
        let newnumber=parseInt(num)-1;
  
        let numCard=document.querySelector(".son-8");
        let baz=+numCard.innerText;
        let newbaz=parseInt(baz)-1;


        let foo=Element.children[0];
        let choose=(foo.children[1]).innerText;
        let narx=1;
        switch (choose) {
          case 'Carrot':narx=3.49;
            break;
          case 'Red Velvet':narx=4;
            break;
          case 'Mint Chip':narx=2.50;
            break;
          case 'Pink Strawberry':narx=1.20;
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
          case 'Totally nuts':narx=2.1;
            break;
          case 'Pink Vanilla':narx=1.25;
            break;
          case 'Chococream':narx=4.2;
            break;
          default:
            break;
        }

        if (newnumber>=0) {
          son.innerText=newnumber;
          numCard.innerText=newbaz;
          ikki.children[1].innerText=`$${newnumber*narx}`;
        } else {
          son.innerText;
          alert("0 dan kamaytirib bo'lmaydi ");
        }


      let vip=document.getElementById("narxi");
      let fun=0;
      const arrayNarx=[];
      array.forEach((foo)=> {
        // console.log(foo);
        let a=foo.children[1];
        let b=a.children[1];
        let c=b.innerText;
        c=c.slice(1, );
        let hand=Number(c)
        // console.log(hand);
        arrayNarx.push(hand);
        fun=fun+hand;
      })
      console.log(fun);
      vip.innerHTML="<span id='narxi'>$"+fun+"</span>";

    })

  }