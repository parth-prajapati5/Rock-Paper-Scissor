let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".choice");
let result = document.querySelector("#msg");
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");
const computerchoice = () => {
    const comp = ["rock", "paper", "scissor"];
    const randomid = comp[Math.floor(Math.random() * comp.length)];
    return randomid;

}
const playgames = (userchoice) => {
   
    let compchoice = computerchoice();
    if (userchoice === compchoice) {
        result.style.background="#081829"
        result.textContent = "Game Was Draw.Play again.";
        
    }
    else {
        let userwin = true;
        if ( userchoice === "rock"){
            userwin=compchoice ==="paper" ? false :true;
        }
        else if( userchoice === "paper"){
            userwin=compchoice ==="scissor" ? false : true; 
        }
        else{
            userwin=compchoice === "rock" ? false : true;
        }
        if(userwin === true){
            
         result.textContent=`You Won! Your ${userchoice} beats ${compchoice}`;
         result.style.background="green";
         userscore++;
         user.textContent=userscore;

        }
        else{
         result.textContent=`You Lose! ${compchoice} beats Your ${userchoice}`;
         result.style.background="red";
         compscore++;
         comp.textContent=compscore;
        }
   }
}
choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgames(userchoice);

    })
})