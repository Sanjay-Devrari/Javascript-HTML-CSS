let userscore=0;
let compuetscore=0;
const userpoint=document.querySelector("#userspoints");
const computerpoint=document.querySelector("#computerspoints");
const user=document.querySelectorAll(".choise");
let result=document.querySelector("#result");
const gencomputerchoise=()=>{
    const options=["Rock","Paper","Seaser"];
    const randamix=Math.floor(Math.random()*3);
    return options[randamix];
};

const playgame=(userchoise)=>{
    const computerchoise=gencomputerchoise();
    if(userchoise===computerchoise){
        drawgame();
        imageshow(userchoise,computerchoise);
    }else{
        let userwin=true;
        if(userchoise==="Rock"){
            userwin=computerchoise==="Paper"? false : true;
        }else if(userchoise==="Paper"){
            userwin=computerchoise==="Seaser"? false :true; 
        }else{
            userwin=computerchoise==="Rock"? false :true;
        }
        showwiner(userwin,userchoise,computerchoise);
        imageshow(userchoise,computerchoise);
    }
   
};
const msg=document.querySelector("#msg");
const showwiner=(userwin,userchoise,computerchoise)=>{
    if(userwin){
    userscore++;
    userpoint.innerText=userscore;
        msg.innerText=`You are Win Your ${userchoise} Bets Computer ${computerchoise}`;
        result.style.background="#08ff3d";
        msg.style.color="black";
    }else{
    compuetscore++;
    computerpoint.innerText=compuetscore;
    msg.innerText=`You are Lose Computer ${computerchoise} Bets Your ${userchoise}`;
    result.style.background="#ff080c";
    msg.style.color="black";
    }
};

const imageshow=(userchoise,computerchoise)=>{
    let userimg=document.querySelector("#userimg");
    let computerimg=document.querySelector("#computerimg");
   
   const usersection=(userchoise)=>{
    if(userchoise==="Paper"){
        userimg.src="paper.png";
    }
    else if(userchoise==="Seaser"){
        userimg.src="seaser.png";
    }
    else if(userchoise==="Rock"){
        userimg.src="stone.png";
    }
    }
    const computersection=(computerchoise)=>{
    if(computerchoise==="Paper"){
           computerimg.src="paper.png";
    }
    else if(computerchoise==="Seaser"){
           computerimg.src="seaser.png"; 
    }
    else if(computerchoise==="Rock"){
           computerimg.src="stone.png";
    }
    }
     usersection(userchoise);
    computersection(computerchoise);
}
const drawgame=()=>{
    result.style.backgroundColor="black"; 
    msg.innerText="Game was Draw";
    msg.style.color="white";
    result.style.background="black";
}

user.forEach((choise)=>{
    choise.addEventListener("click",()=>{
    const userchoise=choise.getAttribute("id");
    playgame(userchoise);
    })
});

