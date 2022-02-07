// document.querySelector('').innerHTML = "l"
var music = new Audio("Elector.mp4")
var badend = new Audio('badend.mp4')
var goodend = new Audio('goodend.mp4')
var trueend = new Audio('trueend.mp4')

music.volume = 0.05
music.loop
function start() {
    music.play()
    document.querySelector('.start').style.display = "none"
    document.querySelector('.textbox').innerHTML = "You are a student studying Alannan Highschool"
    document.querySelector('.next').style.display = "block"

    document.querySelector('.next').onclick = confession
}
function confession() {
    document.querySelector('.textbox').innerHTML = "You received a letter in your locker, seems to be a love letter. It says the person wants you to be at the roof after school. Do you go or not?"
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').innerHTML = "Time to get a girlfriend"
    document.querySelector('.option2').innerHTML = "Nah, kinda busy today"
    document.querySelector('.option1').onclick = goRoof
    document.querySelector('.option2').onclick = goHome

}
function goRoof() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/roofbg')"
    document.querySelector('.option1').style.display = "none"
    document.querySelector('.option2').style.display = "none"
    document.querySelector('.textbox').innerHTML = "You waited until the school is over and walked up the stairs to the roof. You see a girl waiting there already"
    document.querySelector('.next').onclick = Emily
}
function Emily() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/roofEmily.png')"
    document.querySelector('.name').innerHTML = "Emily"
    document.querySelector('.textbox').innerHTML = "Oh Yokasi, I've been waiting for you. Thank god you came, I was worrying. Anyways... I just wanna ask you if you want to be my boyfriend... or do you have a crush on someone already"
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').innerHTML= "Sure, why not"
    document.querySelector('.option2').innerHTML = "I don't really know you that well"
    document.querySelector('.option1').onclick = accept
    document.querySelector('.option2').onclick = reject
}
function accept() {
    document.querySelector('.option1').style.display = "none"
    document.querySelector('.option2').style.display = "none"
    document.querySelector('.bg').style.backgroundImage = "url('picture/holdhand.jpg')"
    document.querySelector('.name').innerHTML = ""
    document.querySelector('.textbox').innerHTML = "So you accepted her confession. Although you guys are not in the same class, you spend time with her everyday. You guys eat lunch together, go out on date every weekend, just like a lovely couple."
    document.querySelector('.next').onclick = anotherConfession
}
function anotherConfession() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/schoolbg.png')"
    document.querySelector('.textbox').innerHTML = "You and Emily just lived happily ever after... until you received another letter in your locker"
    document.querySelector('.next').onclick = anotherGoRoof
}
function anotherGoRoof() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/Yuki.png')"
    document.querySelector('.textbox').innerHTML = "You walked up the stairs... again. You saw cute girl waiting for you... again"
    document.querySelector('.next').onclick = yukiConfession
}
function yukiConfession() {
    document.querySelector('.name').innerHTML = "Yuki"
    document.querySelector('.textbox').innerHTML = "So... I know you already have a girlfriend, but I still want to tell you how I feel. I like you, please be my boyfriend"
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').innerHTML = "Of course, one more girlfriend one more happiness"
    document.querySelector('.option2').innerHTML = "Sorry, but I'm gonna stay loyal to my girlfriend"
    document.querySelector('.option1').onclick = yukiAccept
    document.querySelector('.option2').onclick = yukiReject
}
function yukiReject() {
    document.querySelector('.name').innerHTML = ""
    document.querySelector('.option1').style.display = "none"
    document.querySelector('.option2').style.display = "none"
    document.querySelector('.textbox').innerHTML = "You stayed loyal to your girlfriend and probably avoided every unnecessary problem you could get in"
    document.querySelector('.next').onclick = trueEnd1
}
function trueEnd1() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/city.jpg')"
    document.querySelector('.textbox').innerHTML = "Anyways time flied, its been already 8 years since you have first met Emily. You decided to meet her parents and ask them for permission to marry Emily"
    document.querySelector('.next').onclick = trueEnd2
}
function trueEnd2() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/parents.png')"
    document.querySelector('.textbox').innerHTML = "Emily's parents are happy to have you as their son-in-law since that you have a decent job, and you have proved that you truly love Emily in these 8 years"
    document.querySelector('.next').onclick = trueEnd3
    music.pause()
    trueend.play()
}
function trueEnd3() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/marriage.jpg')"
    document.querySelector('.textbox').innerHTML = "And there you go, you and Emily are officially husband and wife"
    document.querySelector('.bg').innerHTML = "True End"
}
function yukiAccept() {
    document.querySelector('.name').innerHTML = ""
    document.querySelector('.option1').style.display = "none"
    document.querySelector('.option2').style.display = "none"
    document.querySelector('.bg').style.backgroundImage = "url('picture/date.png')"
    document.querySelector('.textbox').innerHTML = "And so, you accepted Yuki's confession and secretly dating Yuki behind Emily's back"
    document.querySelector('.next').onclick = yukiAccept2
}
function yukiAccept2() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/date.png')"
    document.querySelector('.textbox').innerHTML = "You also told Yuki that you broke up with Emily already"
    document.querySelector('.next').onclick = yukiAccept3
}
function yukiAccept3() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/fight.jpg')"
    document.querySelector('.textbox').innerHTML = "But one day, Yuki found out that you are still dating with Emily, and they had the biggest fight ever. Now both women are mad at you and left you."
    document.querySelector('.next').onclick = yukiAccept4
}
function yukiAccept4() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/thinking.jpg')"
    document.querySelector('.textbox').innerHTML = "One day alone on bed, you heard that someone is knocking your door. You left the bed and opened the door"
    document.querySelector('.next').onclick = yukiEnd
}
function yukiEnd() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/dead.jpg')"
    document.querySelector('.textbox').innerHTML = "Before you even got to react, you saw Yuki ran in the door with a knife and stabbed right into your chest. With no questions asked, you died immediately"
    document.querySelector('.next').style.display = "none"
    document.querySelector('.bg').innerHTML = "Bad End"
    music.pause()
    badend.play()
}
function reject() {
    document.querySelector('.option1').style.display = "none"
    document.querySelector('.option2').style.display = "none"
    document.querySelector('.textbox').innerHTML = "I see... thank you for your time then..."
    document.querySelector('.next').onclick = reject2
}
function reject2() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/thinking.jpg')"
    document.querySelector('.name').innerHTML = ""
    document.querySelector('.textbox').innerHTML = "You went back home and lied on your bed. Although you rejected her, you couldn't help just thinking about her, which made you unable to sleep"
    document.querySelector('.next').onclick = reject3
}
function reject3() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/reject3.jpg')"
    document.querySelector('.textbox').innerHTML = "You kept thinking about her for months, and when you decided to confess to her again, you saw her with another man together already"
    document.querySelector('.next').onclick = rejectend
    music.pause()
    badend.play()
}
function rejectend() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/useless.png')"
    document.querySelector('.textbox').innerHTML = "You felt like your whole mind and body is hers, and now you don't know what to do. You feel like the meaning of living is gone. You stopped working hard, and never got a good result. You just grew old and achieved nothing in life."
    document.querySelector('.next').style.display = "none"
    document.querySelector('.bg').innerHTML = "Bad End"

}
function goHome() {
    document.querySelector('.bg').style.backgroundImage = "url('picture/homebg.jpg')"
    document.querySelector('.option1').style.display = "none"
    document.querySelector('.option2').style.display = "none"
    document.querySelector('.textbox').innerHTML = "You got home and you remembered that you live alone. You had a lonely dinner with yourself, and live on the day as it always is."
    document.querySelector('.next').onclick = millionaire

}
function millionaire() {
    music.pause()
    goodend.play()
    document.querySelector('.bg').style.backgroundImage = "url('picture/millionaire.png')"
    document.querySelector('.bg').innerHTML = "Good End"

    document.querySelector('.textbox').innerHTML = "without distraction in life, you successfully get your doctor degree and created a company that eventually makes you the top millionaire"
    document.querySelector('.next').style.display = "none"
//hi biwbiwbwi
//gae sae kki
}