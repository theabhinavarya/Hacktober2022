const btn=document.getElementById('btn');
const container=document.getElementById('container');
btn.addEventListener('click',() => {
    createnotification();
});
function createnotification(){
    const notif=document.createElement('div');
    notif.classList.add('toast');
    notif.innerText="Hey, you clicked the button";
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    },3000);
}