// initialise variables
let audioElement = new Audio('songs/3.mp3')
const logo = document.querySelector('#image1');
let songsongIndex = 0;
const myplay= document.getElementById("masterplay");
let myprogressbar = document.querySelector('#myprogressbar');
let gif = document.querySelector('#gif');
let songitem = Array.from(document.getElementsByClassName("songItem"));
let allplay = Array.from(document.getElementsByClassName('allplay'));
let previous = document.querySelector('#previous');
let next = document.querySelector('#next');
let newsongname = document.querySelector('#newsongname');

 
//array of objects of songs

let songs = [
  {songname: "Marrio Imoorals" , filepath: "songs/0.mp3" , coverpath: "img/1.jpg"},
  {songname: "Fade - Alan Walker" , filepath: "songs/1.mp3" , coverpath: "img/2.jpg"},
  {songname: "Frag Out - DJ Assass1n" , filepath: "songs/2.mp3" , coverpath: "img/3.jpg"},
  {songname: "Invincible - Deaf Kev" , filepath: "songs/3.mp3" , coverpath: "img/4.jpg"},
  {songname: "Sky High - Elektronomia" , filepath: "songs/4.mp3" , coverpath: "img/5.jpg"},
  {songname: "Force - Alan Walke" , filepath: "songs/5.mp3" , coverpath: "img/6.jpg"},
  {songname: "Spectre - Alan Walker" , filepath: "songs/6.mp3" , coverpath: "img/7.jpg"},
  {songname: "Dreams - Lost Sky" , filepath: "songs/7.mp3" , coverpath: "img/8.jpg"},
]
// audioElement.play();


//handle play/pause click 

 myplay.addEventListener('click' , ()=>{
 if(audioElement.paused || audioElement.currentTime <= 0){
  audioElement.play();
  myplay.classList.remove('fa-circle-play');
  myplay.classList.add('fa-circle-pause');
  gif.style.opacity = 1;
 }else{
  audioElement.pause();
  myplay.classList.remove('fa-circle-pause');
  myplay.classList.add('fa-circle-play');
  gif.style.opacity = 0;

 }
 })

 //song progress
audioElement.addEventListener('timeupdate' , ()=>{
  var progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 
  myprogressbar.value = progress;
})

myprogressbar.addEventListener('change' , ()=>{
  audioElement.currentTime = myprogressbar.value *audioElement.duration/100 ;
})

// for songs cover image 

songitem.forEach((element , i)=>{
 
element.getElementsByTagName("img")[0].src = songs[i].coverpath;
element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname; 
})

// for each item of songs 

const makeallplays = ()=>{
 allplay.forEach((element)=>{
  element.classList.remove("fa-circle-pause")
  element.classList.add("fa-circle-play")
 })
}


allplay.forEach((element)=>{
element.addEventListener('click' , (e)=>{
  makeallplays();
  songIndex = parseInt(e.target.id);
  e.target.classList.remove("fa-circle-play")
  e.target.classList.add("fa-circle-pause")
  audioElement.src = `songs/${songIndex +1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  myplay.classList.remove('fa-circle-play');
  myplay.classList.add('fa-circle-pause');
  gif.style.opacity = 1;
  newsongname.innerHTML =  songs[songIndex].songname;
})
})


// for previous and next buttons 

previous.addEventListener('click' , ()=>{
  if(songIndex<=0){
    songIndex = 0;
  }else{
    songIndex -= 1; 
  }

  audioElement.src = `songs/${songIndex +1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  myplay.classList.remove('fa-circle-play');
  myplay.classList.add('fa-circle-pause');
  gif.style.opacity = 1;
  newsongname.innerHTML =  songs[songIndex].songname;


});


next.addEventListener("click" , ()=>{
  if(songIndex>=9){
    songIndex = 0;
  }else {
    songIndex += 1; 
  }

  audioElement.src = `songs/${songIndex +1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  myplay.classList.remove('fa-circle-play');
  myplay.classList.add('fa-circle-pause');
  gif.style.opacity = 1;
  newsongname.innerHTML =  songs[songIndex].songname;


})


 logo.addEventListener('click' , ()=>{
   const linkurl = "https://open.spotify.com/?";
   window.location.href = linkurl;
 })

 