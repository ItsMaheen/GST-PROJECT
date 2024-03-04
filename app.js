

function fun1() {
    
  // const total = document.querySelector("#total") 
  const burger = document.querySelector("#burger").value;
  const sandwich = document.querySelector("#sandwich").value;
  const pizza = document.querySelector("#pizza").value;
  const pasta = document.querySelector("#pasta").value;
  const chicken65 = document.querySelector("#chicken65").value;
  const chickenkebab = document.querySelector("#chickenkebab").value;

  let total = parseInt(burger) + parseInt(sandwich) + parseInt(pasta) + parseInt(pizza) + parseInt(chicken65) + parseInt(chickenkebab);
  alert(total);

  document.getElementById("amount").innerHTML=total;

  //adding gst of 18%

  let withGst = total + ((18/100)*total);

  document.getElementById("totalgst").innerHTML=withGst;
  
  //total amount
  
  let totalCost 
    
    if(withGst > 4000){
      totalCost = withGst + 500;
   }else{
      return withGst;
   }
 
   
  //  alert(totalCost);

  // console.log(totalCost);
  
  document.getElementById("totalcost").innerHTML=totalCost;
   
}




// total.addEventListener("submit", (e)=>{

// const burgerValue = amount.value.trim();
// const sandwichValue = amount.value.trim();
// const pastaValue = amount.value.trim();
// const chicken65Value = amount.value.trim();
// const chickenkababValue = amount.value.trim();

// const totalValue = burger + sandwich + pasta + chicken65 + chickenkebab;

// console.log("totalValue");

// if(burgerValue == "")
// e.preventDefault();
// alert("please provide amount");
// name.focus();
// return false;

// })


































//  function ( 
//     burger,
//     pizza,
//     sandwich,
//     pasta,
//     chicken65,
//     chickenkebab
//  )=>{
//         let totalCost =
//         burger +
//         pizza +
//         sandwich  +
//         pasta +
//         chicken65 +
//         chickenkebab;
//         let totalPricesWithgst = totalCost + ((18/totalCost)*100);
//           // return totalPricesWithgst;
//           console.log(totalPricesWithgst)
//           let total = (totalPricesWithgst) =>{
//             if(totalPricesWithgst > 4000){
//                 total = totalPricesWithgst + 500;
//               return totalPricesWithgst;
//             }
//         }
//         const result = totalPricesWithgst(100,100,100,100,100,100)

//         console.log(result);
//     }

    





// const result = total(5000)

// console.log(result);

// // function add(){
// //   let burger = document.getElementById('')
// //   }
