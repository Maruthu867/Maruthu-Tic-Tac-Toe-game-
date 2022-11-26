const boxs=document.querySelectorAll('.box');
const status=document.querySelector('#status');
let x="<img src='x.png'width=120px height=133px>";
let o="<img src='o.png' width=120px height=133px>";
let won;



const win=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2]
];
let options =["","","","","","","","",""];
let currentplayer=x;
let player='X';
let running=false;
init();
function init()
{
    boxs.forEach(box=>box.addEventListener('click',boxclick));
    status.textContent=`${player} your turn`;
    running=true;
}
function boxclick()
{
   const index =this.dataset.index;
   if(options[index]!=""|| !running)
{
  return;
}

updatebox(this,index)
   checkwinner();
}
function updatebox(box,index){
    options[index]=player;
    box.innerHTML=currentplayer;

}
function changeplayer()
{
  player=(player=='X') ? "O" :"X";
  currentplayer=(currentplayer== x) ? o : x;
  status.textContent=`${player} your turn`;
}
function checkwinner()
{
  let isWon = false;
  for(let i=0;i<win.length;i++)
  {
    const condition =win[i];
    const box1=options[condition[0]];
    const box2=options[condition[1]];
    const box3=options[condition[2]];
    if(box1==""||box2==""||box3==""){
      continue;
    }

    if(box1==box2 && box2==box3)
    {
      isWon=true;
    }
  }
    if(isWon)
    {
      status.textContent= `${player} won..`;
    running=false;

    }else if(!options.includes("")){
      status.textContent="Game draw";
      running=false;
    }
    else{
      changeplayer();
    }
  

    
}
