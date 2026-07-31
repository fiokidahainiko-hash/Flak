// =========================
// FLAK Hashtag Generator
// =========================

const hashtagDatabase = {

general: [
"fyp","foryou","foryoupage","viral","trending","explore","tiktok",
"viralvideo","trend","creator","contentcreator","explorepage",
"video","reels","shorts","socialmedia","content","daily","popular","discover"
],

football: [
"football","soccer","goal","goals","footballtok","premierleague",
"championsleague","laliga","seriea","bundesliga","uefa","fifa",
"worldcup","matchday","footballlife","footballskills","sports","ball"
],

gaming: [
"gaming","gamer","gamingclips","esports","fortnite","minecraft",
"valorant","pubg","freefire","roblox","xbox","playstation",
"pcgaming","gaminglife","streamer","gamingcommunity"
],

music: [
"music","musictok","song","artist","dj","producer",
"beats","playlist","concert","afrobeats","hiphop",
"rap","pop","newmusic","viralmusic"
]

};

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", generateHashtags);
copyBtn.addEventListener("click", copyHashtags);

function generateHashtags(){

loadingButton(generateBtn);

const keyword = document.getElementById("keyword").value.trim().toLowerCase();

const category = document.getElementById("category").value;

const output = document.getElementById("hashtags");

if(keyword===""){

showToast("⚠️ Enter a keyword");

return;

}

let hashtags = [];

hashtags.push("#"+keyword);

hashtags.push("#"+keyword+"tips");

hashtags.push("#"+keyword+"viral");

hashtags.push("#"+keyword+"tok");

hashtags.push("#"+keyword+"2026");

hashtags.push("#"+keyword+"creator");

hashtags.push("#"+keyword+"video");

hashtags.push("#"+keyword+"trend");

hashtags = hashtags.concat(
hashtagDatabase.general
.map(tag=>"#"+tag)
);

if(hashtagDatabase[category]){

hashtags = hashtags.concat(

hashtagDatabase[category]
.map(tag=>"#"+tag)

);

}

hashtags=[...new Set(hashtags)];

hashtags.sort(()=>Math.random()-0.5);

output.innerHTML="";

hashtags.slice(0,30).forEach(tag=>{

const span=document.createElement("span");

span.className="tag";

span.innerHTML=tag;

output.appendChild(span);

});

showToast("🚀 Hashtags Generated");

}

function copyHashtags(){

const tags=[

...document.querySelectorAll(".tag")

].map(t=>t.innerText);

if(tags.length===0){

showToast("Nothing to copy");

return;

}

copyText(tags.join(" "));

}
