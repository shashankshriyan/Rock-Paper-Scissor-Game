
usercount=0;
compcount=0;
const tab=document.querySelector("#tab");
let userscore=document.querySelector("#your-score")
let cmpscore=document.querySelector("#computer-score")
let compchoice=()=>
{
    let arr=["rock","paper","scissor"];
    let choice=Math.floor(Math.random() *3);
    return arr[choice];

}

const showWinner=(userchoice,cmpchoice,userwin)=>{
    if(userwin){
        usercount++;
        userscore.innerText=usercount;
        tab.innerText=`you won! your ${userchoice} beats ${cmpchoice}`;
        tab.style.backgroundColor="green";
        

    }
    else{
        compcount++;
        cmpscore.innerText=compcount;
        tab.innerText=`you lost. your ${userchoice} defeated by ${cmpchoice}`;
        tab.style.backgroundColor='red';

    }
};

let compare = (userchoice) =>{
    
    let cmpchoice=compchoice();
    if (userchoice === cmpchoice)
    {
       tab.innerText="draw";
       tab.style.backgroundColor='black';
    }
    else{
        let userwin=true;
        if(userchoice === "rock"){
            userwin=cmpchoice === "paper" ? false:true;
        }
        else if(userchoice === "paper"){
            userwin=cmpchoice === "scissor"?false:true;
        }
        else{
            userwin=cmpchoice ==="rock"?false:true;
        }
         showWinner(userchoice,cmpchoice,userwin);
            
        }
    };
  
            
            

            

      
    



choices=document.querySelectorAll(".choice");


choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
        
        const userchoice = choice.getAttribute("id");
        compare(userchoice);
        

    });

    
});
