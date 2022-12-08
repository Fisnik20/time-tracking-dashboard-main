const cards = document.querySelectorAll('.card');
const dayBtn = document.querySelectorAll('.dayBtn');

const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]

const dailyBtn = document.getElementById('daily');
dailyBtn.addEventListener('click', daily)
function daily(){
   
  
    for (let i = 0; i < cards.length; i++) {

      cards[i].querySelector('.category').innerText = data[i].title;
      cards[i].querySelector('.currentTime').innerText = `${data[i].timeframes.daily.current}hrs`;
      cards[i].querySelector('.previousTime').innerText = `Yesteday - ${data[i].timeframes.daily.previous}hrs`;
    }
     
  
  for (let k = 0; k < dayBtn.length; k++) {
    dayBtn[k].classList.remove('active')

  } 
  this.classList.add('active');
}
const weeklyBtn = document.getElementById('weekly');
weeklyBtn.addEventListener('click', weekly)
function weekly(){ 
  
  
    for (let i = 0; i < cards.length; i++) {
      cards[i].querySelector('.category').innerText = data[i].title;
      cards[i].querySelector('.currentTime').innerText = `${data[i].timeframes.weekly.current}hrs`;
      cards[i].querySelector('.previousTime').innerText = `Last week - ${data[i].timeframes.weekly.previous}hrs`;
    }
   
  for (let k = 0; k < dayBtn.length; k++) {
    dayBtn[k].classList.remove('active')
  }
  this.classList.add('active');
}

const monthlyBtn = document.getElementById('monthly');
monthlyBtn.addEventListener('click', monthly)
function monthly(){ 
  for (let j = 0; j < cards.length; j++) {
      cards[j].querySelector('.card-content').style.height = '80%'
  }
  
    for (let i = 0; i < cards.length; i++) {
      cards[i].querySelector('.category').innerText = data[i].title;
      cards[i].querySelector('.currentTime').innerText = `${data[i].timeframes.monthly.current}hrs`;
      cards[i].querySelector('.previousTime').innerText = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
    }
  
  for (let k = 0; k < dayBtn.length; k++) {
    dayBtn[k].classList.remove('active')
  }
  this.classList.add('active');
}
 