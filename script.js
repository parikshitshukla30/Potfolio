function show(id,btn){
document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');

document.querySelectorAll('.navbar button').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
}

function filter(type){
document.querySelectorAll('.project').forEach(card=>{
if(type==='all'||card.classList.contains(type)){
card.style.display='block';
}else{
card.style.display='none';
}
});
}
