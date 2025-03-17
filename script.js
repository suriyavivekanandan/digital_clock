let is24hr=true;
let isdarkmode=true;
let ampm=''
const updateTime=()=>{
  const now=new Date();
   let hours=now.getHours();
 
  if(!is24hr){
    ampm=hours>=12?'pm':'am'
    hours=hours%12 ||12;
  }
  hours = hours.toString().padStart(2, '0');
  let min=now.getMinutes().toString().padStart(2,'0')
  let sec=now.getSeconds().toString().padStart(2,'0')

  const timeString=`${hours}:${min}:${sec}${ampm}`
  const dateString= now.toDateString();
  document.getElementById('clock').innerText=timeString;
  document.getElementById('date').innerText=dateString;


}
setInterval(updateTime,1000);
updateTime();

document.getElementById('toggleFormat').addEventListener('click', () => {
  is24hr = !is24hr;
  document.getElementById('toggleFormat').textContent =
    is24hr? 'Switch to 12-Hour' : 'Switch to 24-Hour';
  updateTime();;
});


document.getElementById('toggleMode').addEventListener('click', () => {
  isdarkmode = !isdarkmode;
  document.body.className =   isdarkmode ? 'dark-mode' : 'light-mode';
  document.getElementById('toggleMode').textContent =
  isdarkmode ? '🌙 Dark Mode' : '☀️ Light Mode';
});