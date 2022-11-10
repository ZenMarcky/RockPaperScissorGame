document.querySelector("#normalMode").addEventListener('click', normalMode)
document.querySelector("#playEarn").addEventListener('click', playEarn)



/* NormalMode*/

function normalMode(){
    document.querySelector('.home').style.display = "block";
document.querySelector('.container').style.display = "flex";
document.querySelector('.container-landing').style.display = "none";
    let lost = 0;
    let won = 0;

    let add = 1;
    document.querySelector('#rock').addEventListener('click', choseRock);
document.querySelector('#paper').addEventListener('click', chosePaper);
document.querySelector('#scissor').addEventListener('click', choseScissor);
    
    function choseRock(){
    let rock = 0;
    let enemy = Math.floor(Math.random() * 3);
    1;
    
    if( rock < enemy && enemy === 2){
        alert("You Won");  
     
        won += add
         
        document.querySelector("#status").innerHTML = "Win";
     
        document.querySelector("#won").innerHTML = won;
       
    
    }
    else if(rock < enemy && enemy === 1){
        alert("You Lost");
        lost += add
        document.querySelector("#status").innerHTML = "Lost";
        document.querySelector("#lost").innerHTML = lost;
    }
    else if(rock === enemy){
        alert("You Draw");
        document.querySelector("#status").innerHTML = "Draw";
    }
    }
    
    function chosePaper(){
        let paper = 1;
        let enemy = Math.floor(Math.random() * 2);
    
        if( paper > enemy && enemy === 0){
            alert("You Win");
            won += add
            document.querySelector("#status").innerHTML = "Win";
            document.querySelector("#won").innerHTML = won;
        }
        else if(paper < enemy && enemy === 2){
            
            alert("You Lost");
            lost += add
            document.querySelector("#status").innerHTML = "Lost";
            document.querySelector("#lost").innerHTML = lost;
        }
        else if(paper === enemy){
            alert("You Draw");
            document.querySelector("#status").innerHTML = "Draw";
        }
        };
        
        function choseScissor(){
            let scissor = 2;
            let enemy = Math.floor(Math.random() * 2);
        
            if( scissor > enemy && enemy === 1){
                alert("You Win");
                won += add
                document.querySelector("#status").innerHTML = "Win";
                document.querySelector("#won").innerHTML = won;
            }
            else if(scissor > enemy && enemy === 0){
                alert("You Lost");
                lost += add
                document.querySelector("#status").innerHTML = "Lost";
                document.querySelector("#lost").innerHTML = lost;
            }
            else if(scissor === enemy){
                alert("You Draw");
                document.querySelector("#status").innerHTML = "Draw";
            }
            };
    
};

/* PlayEarnFucntion */

function playEarn(){
    document.querySelector('.home').style.display = "block";
    document.querySelector('.moneyMeter').style.display = "block";
document.querySelector('.container').style.display = "flex";
document.querySelector('.container-landing').style.display = "none";
    let lost = 0;
    let won = 0;
    let add = 1;
    let money = 0;
    let earn = 10;
    let lostMoney = -10;
    
    document.querySelector('#rock').addEventListener('click', choseRock);
document.querySelector('#paper').addEventListener('click', chosePaper);
document.querySelector('#scissor').addEventListener('click', choseScissor);
    
    function choseRock(){
    let rock = 0;
    let enemy = Math.floor(Math.random() * 3);
    1;
    
    if( rock < enemy && enemy === 2){
        alert("You Won");  
     
        won += add;
         money+= earn;

        document.querySelector("#status").innerHTML = "Win";
        document.querySelector("#won").innerHTML = won;
        
        document.querySelector("#earn").innerHTML = money;
        
    
    }
    else if(rock < enemy && enemy === 1){
        alert("You Lost");
        lost += add
        money+= lostMoney;
        document.querySelector("#status").innerHTML = "Lost";
        document.querySelector("#lost").innerHTML = lost;
        document.querySelector("#earn").innerHTML = money;
    }
    else if(rock === enemy){
        alert("You Draw");
        document.querySelector("#status").innerHTML = "Draw";
    }
    }
    
    function chosePaper(){
        let paper = 1;
        let enemy = Math.floor(Math.random() * 2);
    
        if( paper > enemy && enemy === 0){
            alert("You Win");
            won += add;
            money+= earn;
            document.querySelector("#status").innerHTML = "Win";
            document.querySelector("#won").innerHTML = won;
            document.querySelector("#earn").innerHTML = money;
        }
        else if(paper < enemy && enemy === 2){
            
            alert("You Lost");
            lost += add
            money+= lostMoney;
            document.querySelector("#status").innerHTML = "Lost";
            document.querySelector("#lost").innerHTML = lost;
            document.querySelector("#earn").innerHTML = money;
        }
        else if(paper === enemy){
            alert("You Draw");
            document.querySelector("#status").innerHTML = "Draw";
        }
        };
        
        function choseScissor(){
            let scissor = 2;
            let enemy = Math.floor(Math.random() * 2);
        
            if( scissor > enemy && enemy === 1){
                alert("You Win");
                won += add;
                money+= earn;
                document.querySelector("#status").innerHTML = "Win";
                document.querySelector("#won").innerHTML = won;
                document.querySelector("#earn").innerHTML = money;
            }
            else if(scissor > enemy && enemy === 0){
                alert("You Lost");
                lost += add
                money+= lostMoney;
                document.querySelector("#status").innerHTML = "Lost";
                document.querySelector("#lost").innerHTML = lost;
                document.querySelector("#earn").innerHTML = money;
            }
            else if(scissor === enemy){
                alert("You Draw");
                document.querySelector("#status").innerHTML = "Draw";
            }
            };
            document.querySelector("#shop").addEventListener('click', shopitems);
document.querySelector("#Back").addEventListener('click', home)

            function shopitems(){
                document.querySelector('.home').style.display = "none";
                document.querySelector("#shoper").innerHTML = money;
                document.querySelector(".shop").style.display = "none";
                document.querySelector('.moneyMeter').style.display = "none";
                document.querySelector('.container').style.display = "none";
                document.querySelector(".container-shop").style.display = "flex";
            };
            function home(){
                document.querySelector('.home').style.display = "block";
                document.querySelector(".shop").style.display = "block";
                document.querySelector('.moneyMeter').style.display = "block";
                document.querySelector('.container').style.display = "flex";
                document.querySelector(".container-shop").style.display = "none";
            };

            /*Shop Item*/
            document.querySelector("#firstItem").addEventListener('click', firstItem);
            document.querySelector("#secItem").addEventListener('click', secItem);
            document.querySelector("#thirItem").addEventListener('click', thirItem);
            document.querySelector("#forItem").addEventListener('click', forItem);
            document.querySelector("#fifItem").addEventListener('click', fifItem);
            document.querySelector("#sixItem").addEventListener('click', sixItem);
            document.querySelector("#sevItem").addEventListener('click', sevItem);
            document.querySelector("#eightItem").addEventListener('click', eightItem);

function firstItem(){
if(money === 1500 || money > 2500){
  alert("Thank You For Purchasing");
  location.replace("https://snipboard.io/vYnbCK.jpg");
}
else{
    alert("Insufficient funds");
}
};
function secItem(){
    if(money === 200 || money > 200){
      alert("Thank You For Purchasing");
alert("Zen Has No Secret");
alert("Zen Has No Secret");
alert("Zen Has No Secret");
alert("Zen Has No Secret");
alert("Zen Has No Secret");
alert("Zen Has No Secret");

    }
    else{
        alert("Insufficient funds");
    }
    };
    function thirItem(){
        if(money === 2500 || money > 2500){
          alert("Thank You For Purchasing");
    location.replace("https://snipboard.io/GDfqLA.jpg");
        }
        else{
            alert("Insufficient funds");
        }
        };
        function forItem(){
            if(money === 800 || money > 800){
              alert("Thank You For Purchasing");
      alert("OK read carefully");
      alert("Try to be friends to the woman you are interested first");
      alert("Control your feeling and always support her");
            }
            else{
                alert("Insufficient funds");
            }
            };
            function fifItem(){
                if(money === 700 || money > 700){
                  alert("Thank You For Purchasing");
                  location.replace("https://snipboard.io/vi9naT.jpg");
        
                }
                else{
                    alert("Insufficient funds");
                }
                };
    
function sixItem(){
    if(money === 280 || money > 280){
        alert("Thank You For Purchasing");
       alert("Ayiee Talaga?");
       alert("Curious Ka?");
       alert("Ok HERE WE COMES");
       alert("Ser nicky has sweet Voice but zen is better de joke lang haha");

      }
      else{
          alert("Insufficient funds");
      }
}
   
function sevItem(){
    if(money === 7000 || money > 7000){
        alert("Thank You For Purchasing");
      
      }
      else{
          alert("Insufficient funds");
      }
}
function eightItem(){
    if(money === 5000 || money > 5000){
        alert("Thank You For Purchasing");
        alert("Rodney Will Now Massage You For LifeTime");

      }
      else{
          alert("Insufficient funds");
      }
}
};

/*Home Button */

document.querySelector(".home").addEventListener('click', homeReload);


function homeReload(){
    location.reload()
}



       