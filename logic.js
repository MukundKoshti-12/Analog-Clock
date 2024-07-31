console.log("Welcome to Analog clock")
setInterval(()=>{
    d = new Date()
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds()
    // console.log(htime)

    hrotation = 30*htime + mtime/2
    mrotation = 6*mtime + stime/10
    srotation = 6*stime

    Hours.style.transform = `rotate(${hrotation}deg)`
    Minutes.style.transform = `rotate(${mrotation}deg)`
    Seconds.style.transform = `rotate(${srotation}deg)`
},1000)