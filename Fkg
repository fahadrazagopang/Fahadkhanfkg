<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Toobuu Jaan ❤️</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:Arial, "Segoe UI", sans-serif;
    background:#020617;
    color:#fff;
    overflow-x:hidden;
}

/* Background */
body::before{
    content:"";
    position:fixed;
    inset:0;
    z-index:-2;
    background:
        radial-gradient(circle at 20% 20%,rgba(37,99,235,.25),transparent 30%),
        radial-gradient(circle at 80% 70%,rgba(14,165,233,.18),transparent 30%);
}

.stars{
    position:fixed;
    inset:0;
    z-index:-1;
    pointer-events:none;
}

.star{
    position:absolute;
    width:2px;
    height:2px;
    background:#fff;
    border-radius:50%;
    opacity:.5;
    animation:twinkle 2s infinite alternate;
}

@keyframes twinkle{
    from{opacity:.2}
    to{opacity:1}
}

/* Floating Hearts */
.heart{
    position:fixed;
    bottom:-40px;
    z-index:50;
    pointer-events:none;
    animation:floatUp 7s linear forwards;
    font-size:20px;
}

@keyframes floatUp{
    0%{
        transform:translateY(0) scale(.6);
        opacity:0;
    }
    15%{opacity:1}
    100%{
        transform:translateY(-110vh) translateX(80px) scale(1.4);
        opacity:0;
    }
}

/* Hero */
.hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:30px 20px;
}

.hero-content{
    max-width:850px;
}

.top-text{
    color:#60a5fa;
    text-transform:uppercase;
    letter-spacing:5px;
    font-size:13px;
    margin-bottom:25px;
}

.hero h1{
    font-size:clamp(55px,13vw,120px);
    line-height:1;
    margin-bottom:25px;
    background:linear-gradient(135deg,#fff,#60a5fa,#2563eb);
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
}

.hero h2{
    font-size:clamp(22px,5vw,40px);
    margin-bottom:25px;
    color:#dbeafe;
}

.hero p{
    color:#94a3b8;
    line-height:1.8;
    font-size:17px;
    max-width:650px;
    margin:auto;
}

.button{
    display:inline-block;
    margin-top:40px;
    padding:15px 30px;
    border-radius:50px;
    border:1px solid #2563eb;
    color:#fff;
    text-decoration:none;
    background:rgba(37,99,235,.12);
    transition:.3s;
}

.button:hover{
    background:#2563eb;
    box-shadow:0 0 30px rgba(37,99,235,.5);
    transform:translateY(-3px);
}

/* Sections */
section{
    padding:90px 20px;
}

.container{
    max-width:1000px;
    margin:auto;
}

.title{
    text-align:center;
    font-size:40px;
    margin-bottom:15px;
}

.subtitle{
    text-align:center;
    color:#94a3b8;
    margin-bottom:55px;
}

/* Story */
.story{
    background:rgba(15,23,42,.55);
    border-top:1px solid rgba(96,165,250,.12);
    border-bottom:1px solid rgba(96,165,250,.12);
}

.card{
    max-width:800px;
    margin:auto;
    padding:35px;
    border-radius:25px;
    background:rgba(2,6,23,.8);
    border:1px solid rgba(96,165,250,.2);
    box-shadow:0 20px 60px rgba(0,0,0,.4);
}

.card p{
    color:#d1d5db;
    font-size:17px;
    line-height:2;
    margin-bottom:20px;
}

.blue{
    color:#60a5fa;
    font-weight:bold;
}

/* Timeline */
.timeline{
    max-width:750px;
    margin:auto;
    position:relative;
}

.timeline::before{
    content:"";
    position:absolute;
    left:20px;
    top:0;
    bottom:0;
    width:2px;
    background:#2563eb;
}

.item{
    position:relative;
    padding-left:60px;
    margin-bottom:50px;
}

.dot{
    position:absolute;
    left:10px;
    top:4px;
    width:22px;
    height:22px;
    border-radius:50%;
    background:#2563eb;
    box-shadow:0 0 20px #2563eb;
}

.item h3{
    color:#60a5fa;
    margin-bottom:10px;
    font-size:22px;
}

.item p{
    color:#94a3b8;
    line-height:1.8;
}

/* Photos */
.photos{
    background:#01040d;
}

.photo-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.photo{
    height:300px;
    border-radius:22px;
    overflow:hidden;
    border:1px solid rgba(96,165,250,.25);
    background:linear-gradient(135deg,#0f172a,#111827);
}

.photo img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
}

.placeholder{
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#64748b;
    text-align:center;
}

.placeholder span{
    font-size:50px;
    margin-bottom:15px;
}

/* Letter */
.letter{
    max-width:800px;
    margin:auto;
    padding:40px;
    border-radius:30px;
    background:linear-gradient(145deg,#0f172a,#020617);
    border:1px solid rgba(96,165,250,.2);
    box-shadow:0 30px 70px rgba(0,0,0,.5);
}

.letter h3{
    color:#60a5fa;
    font-size:28px;
    margin-bottom:25px;
}

.letter p{
    color:#d1d5db;
    line-height:2;
    font-size:17px;
    margin-bottom:20px;
}

/* Promise */
.promise{
    text-align:center;
    background:radial-gradient(circle,#0f2d5c,#020617 65%);
}

.promise h2{
    font-size:clamp(35px,7vw,65px);
    margin-bottom:30px;
}

.promise p{
    color:#cbd5e1;
    font-size:19px;
    line-height:2;
    margin-bottom:15px;
}

/* Final */
.final{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
}

.big-heart{
    font-size:80px;
    animation:heartbeat 1.2s infinite;
}

@keyframes heartbeat{
    0%,100%{transform:scale(1)}
    50%{transform:scale(1.2)}
}

.final h1{
    font-size:clamp(50px,11vw,110px);
    margin:20px 0;
    background:linear-gradient(135deg,#fff,#60a5fa,#2563eb);
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
}

.final h2{
    font-size:30px;
    color:#dbeafe;
}

.final p{
    margin-top:20px;
    color:#94a3b8;
}

.surprise-btn{
    margin-top:40px;
    padding:16px 35px;
    border:none;
    border-radius:50px;
    background:#2563eb;
    color:#fff;
    font-size:17px;
    cursor:pointer;
    box-shadow:0 0 30px rgba(37,99,235,.4);
    transition:.3s;
}

.surprise-btn:hover{
    transform:translateY(-3px);
    box-shadow:0 0 45px rgba(37,99,235,.7);
}

.surprise{
    display:none;
    max-width:600px;
    margin:30px auto 0;
    padding:30px;
    border-radius:25px;
    background:rgba(15,23,42,.9);
    border:1px solid rgba(96,165,250,.3);
}

.surprise.show{
    display:block;
    animation:appear .7s ease;
}

@keyframes appear{
    from{
        opacity:0;
        transform:translateY(20px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

footer{
    padding:30px;
    text-align:center;
    color:#64748b;
    border-top:1px solid rgba(255,255,255,.05);
}

@media(max-width:600px){

    section{
        padding:70px 18px;
    }

    .card,
    .letter{
        padding:25px;
    }

    .photo{
        height:280px;
    }

    .timeline::before{
        left:15px;
    }

    .dot{
        left:5px;
    }

    .item{
        padding-left:50px;
    }
}
</style>
</head>

<body>

<div class="stars" id="stars"></div>


<!-- HERO -->

<section class="hero">

<div class="hero-content">

<div class="top-text">
A Special Gift For You
</div>

<h1>Toobuu Jaan</h1>

<h2>❤️ Meri Choti Si Duniya ❤️</h2>

<p>
Kuch kahaniyan saalon mein nahi,
sirf ek mulaqat mein shuru ho jati hain...
Aur meri kahani tumse shuru hui.
</p>

<a href="#story" class="button">
Hamari Kahani Dekho ↓
</a>

</div>

</section>


<!-- STORY -->

<section class="story" id="story">

<div class="container">

<h2 class="title">
Hamari Kahani ❤️
</h2>

<p class="subtitle">
Sirf 20 din... lekin yaadein bohat zyada.
</p>

<div class="card">

<p>
Toobuu Jaan...
kis ne socha tha ke
<span class="blue">Karachi se Punjab</span>
aane wali ek larki meri zindagi mein
itni khaas ban jayegi?
</p>

<p>
Main ne tumhein Punjab mein dekha...
aur pata nahi us ek lamhe mein kya hua,
lekin mera dil tumhari taraf khinch gaya.
</p>

<p>
Phir humari baat cheet shuru hui...
phone calls, WhatsApp messages
aur choti choti baatein.
</p>

<p>
Har guzarte din ke saath
tum mere dil ke aur qareeb hoti gayi.
</p>

<p>
Hamari mulaqat ko abhi sirf
<span class="blue">20 din</span>
hue hain,
lekin ye 20 din mere liye
bohat khaas ban gaye hain.
</p>

<p>
Phir woh waqt aaya jab tumhari Ammi
tumhein wapas Karachi le gayin...
</p>

<p>
Tum Punjab se ja rahi thi,
aur hum dono bohat emotional thay.
Tum WhatsApp par mere saath bohat roi...
aur sach kahun Toobuu Jaan,
tumhara woh udaas hona
main kabhi nahi bhool sakta.
</p>

<p>
Ab tum Karachi mein ho
aur main Punjab mein...
lekin distance ne humari baatein nahi rokein.
</p>

<p>
Hum phone par baat karte hain,
WhatsApp par baatein karte hain,
aur har baat ke saath
mera tumhare liye pyaar
aur bhi zyada hota ja raha hai.
</p>

<p>
Jagah badal gayi...
lekin mere dil mein tumhari jagah
kabhi nahi badli.
❤️
</p>

</div>

</div>

</section>


<!-- TIMELINE -->

<section>

<div class="container">

<h2 class="title">
Humari Choti Si Journey
</h2>

<p class="subtitle">
Ek mulaqat se shuru hone wali kahani.
</p>

<div class="timeline">

<div class="item">
<div class="dot"></div>

<h3>Woh Pehla Lamha ❤️</h3>

<p>
Tum Punjab aayi...
main ne tumhein dekha...
and pata nahi kyun dil tumhari taraf khinch gaya.
</p>

</div>


<div class="item">
<div class="dot"></div>

<h3>Baatein Shuru Hui 💙</h3>

<p>
Phir phone calls, WhatsApp messages
aur choti choti baaton ne
hum dono ko qareeb kar diya.
</p>

</div>


<div class="item">
<div class="dot"></div>

<h3>Woh Judaai Ka Lamha 🥺</h3>

<p>
Tumhari Ammi tumhein
wapas Karachi le gayin.
Tumhara Punjab se jaana
hum dono ke liye bohat emotional tha.
</p>

</div>


<div class="item">
<div class="dot"></div>

<h3>Ab Bhi Saath 💙</h3>

<p>
Karachi aur Punjab ke darmiyan
fasla zaroor hai,
lekin humari baatein
ab bhi humein qareeb rakhti hain.
</p>

</div>

</div>

</div>

</section>


<!-- PHOTOS -->

<section class="photos">

<div class="container">

<h2 class="title">
Humari Memories 📸
</h2>

<p class="subtitle">
Hamari special tasveerain.
</p>

<div class="photo-grid">


<!-- PHOTO 1 -->

<div class="photo">
<img src="image_0.png" alt="Toobuu Jaan">
</div>


<!-- PHOTO 2 -->

<div class="photo">
<img src="image_1.png" alt="Fahad Raza">
</div>


<!-- PHOTO 3 (Keeping placeholder as no third image was provided) -->

<div class="photo">

<div class="placeholder">

<span>✨</span>

Photo 3

<br>

Yahan apni picture lagao

</div>

</div>

</div>

</div>

</section>


<!-- LETTER -->

<section>

<div class="container">

<h2 class="title">
Tumhare Liye Ek Message 💌
</h2>

<p class="subtitle">
Fahad Raza ki taraf se Toobuu Jaan ke liye
</p>

<div class="letter">

<h3>Meri Toobuu Jaan ❤️</h3>

<p>
Mujhe nahi pata main apni feelings ko
perfect words mein kaise bayan karun,
lekin tumse milne ke baad
mere andar bohat kuch badal gaya hai.
</p>

<p>
Sirf 20 din mein tum meri zindagi ka
ek bohat khaas hissa ban gayi ho.
Tumhari har call,
har message aur tumhari har choti si baat
mere liye bohat important hai.
</p>

<p>
Mujhe pata hai tum Karachi mein ho
aur main Punjab mein.
Humare darmiyan fasla hai,
lekin main nahi chahta ke ye fasla
humari kahani ka faisla kare.
</p>

<p>
Toobuu Jaan,
ek baat hamesha yaad rakhna:
</p>

<p>
<span class="blue">
Main tumhare liye Karachi aaunga.
</span>
</p>

<p>
Pata nahi woh din kab aayega,
lekin jab aaunga to dil se aaunga...
sirf tumse milne ke liye.
❤️
</p>

<p>
Tab tak mere saath baat karti rehna,
muskurati rehna,
aur ye yaad rakhna ke Punjab mein
koi hai jo tumhein bohat yaad karta hai.
</p>

<p>
— Tumhara Fahad ❤️
</p>

</div>

</div>

</section>


<!-- PROMISE -->

<section class="promise">

<div class="container">

<div class="big-heart">
💙
</div>

<h2>
Karachi Se Punjab Tak...
</h2>

<p>
Fasla sirf shehron ka hai,
dilon ka nahi.
</p>

<p>
<strong>
Tum Karachi mein ho
aur main Punjab mein,
lekin tum mere dil ke
bohat qareeb ho.
</strong>
</p>

<p>
Aur haan Toobuu Jaan...
</p>

<p>
<strong>
Main tumhare liye Karachi aaunga. ✈️❤️
</strong>
</p>

</div>

</section>


<!-- FINAL -->

<section class="final">

<div>

<div class="big-heart">
❤️
</div>

<h1>
I LOVE YOU
</h1>

<h2>
TOOBUU JAAN 💙
</h2>

<p>
Tum meri is choti si kahani ka
sab se khoobsurat hissa ho.
</p>

<button class="surprise-btn" onclick="openSurprise()">
🎁 Apna Surprise Dekho
</button>

<div class="surprise" id="surprise">

<h2>
💙🖤 Toobuu Jaan 🖤💙
</h2>

<p style="line-height:2;color:#cbd5e1;">

Chahe Karachi kitna bhi door ho...

<br>

tum hamesha mere dil ke
bohat qareeb rahogi.

<br><br>

<strong>
I LOVE YOU ❤️
</strong>

<br><br>

— Tumhara Fahad

</p>

</div>

</div>

</section>


<footer>

Made with ❤️ for Toobuu Jaan

</footer>


<script>

/* Stars */

const stars = document.getElementById("stars");

for(let i = 0; i < 100; i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}


/* Floating Hearts */

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    const list = [
        "❤️",
        "💙",
        "💙",
        "❤️",
        "✨"
    ];

    heart.textContent =
        list[Math.floor(Math.random() * list.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },10000);
}

setInterval(createHeart,900);


/* Surprise Button */

function openSurprise(){

    const box =
        document.getElementById("surprise");

    box.classList.toggle("show");

    for(let i = 0; i < 15; i++){

        setTimeout(function(){

            createHeart();

        },i * 100);

    }
}

</script>

</body>
</html>
