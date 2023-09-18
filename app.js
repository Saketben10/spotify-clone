// initialise variables
let audioElement = new Audio('songs/1.mp3')
const logo = document.querySelector('#image1');
let songIndex = 0;
const myplay= document.getElementById("masterplay");
let myprogressbar = document.querySelector('#myprogressbar');
let gif = document.querySelector('#gif');


 

let songs = [
  {songname: "vande matram" , filepath: "songs/1.mp3" , coverpath: "img/1.jpg"},
  {songname: "vande matram" , filepath: "songs/1.mp3" , coverpath: "img/1.jpg"},
  {songname: "vande matram" , filepath: "songs/1.mp3" , coverpath: "img/1.jpg"},
  {songname: "vande matram" , filepath: "songs/1.mp3" , coverpath: "img/1.jpg"},
  {songname: "vande matram" , filepath: "songs/1.mp3" , coverpath: "img/1.jpg"},
  {songname: "vande matram" , filepath: "songs/1.mp3" , coverpath: "img/1.jpg"},
  {songname: "vande matram" , filepath: "songs/1.mp3" , coverpath: "img/1.jpg"},
  {songname: "vande matram" , filepath: "songs/1.mp3" , coverpath: "img/1.jpg"},
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
  console.log(progress);
  myprogressbar.value = progress;
})

myprogressbar.addEventListener('change' , ()=>{
  audioElement.currentTime = myprogressbar.value *audioElement.duration/100 ;
})












 logo.addEventListener('click' , ()=>{
   const linkurl = "https://open.spotify.com/?";
   window.location.href = linkurl;
 })

 