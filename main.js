// "use strict"

let seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function (){
    seriesDB.count = +prompt('Nechta serial kordingiz','');

    while( 
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt('Nechta serial kordingiz','');
    }
  },

  rememberMySeries: function() {
    for(let i = 0; i < 2; i++){
      const a = prompt("Oxirgi korgan serialingiz"),
            b = prompt("nechchi baho berasiz ");
    
      if(a != "" && b != null && b != "" && b != null){
        seriesDB.series[a] = b
        console.log("done");
      }else {
        console.log("error");
        i--
      }
    }
  },

  detectLevelSeries: function() {
    if(numberOfSeries < 5) {
      console.log("kam serial koribsiz");
    }else if (numberOfSeries <= 10 ) {
      console.log("Siz classic tomoshabin ekansiz");
    }else {
      console.log("siz serialchi zvezda ekansiz");
    }
  },

  showDb:function () {
    if(!seriesDB.private) {
      console.log(seriesDB)
    }
  },
  visibleDB:function () {
    if(seriesDB.private) {
      seriesDB.private = false
    }else {
      seriesDB.private = true

    }
  },
  writeGenres:function () {
    // for(let i = 0; i <= 2; i++) {
      // const genre = prompt(`Yaxshi korgan janringiz${i+1}`);
      // if(genre === "" || genre === null){
      //   console.log("Siz noto'gri ma'lumot kiritdingiz");
      //   i--
      // }else {
      // seriesDB.genres[i] = genre
      // }
    // }
      let genres = prompt("Yaxshi korgan janringizni vergul yordamida yozing").toLowerCase()
      if(genres === "" || genres === null){
        console.log("Siz noto'gri ma'lumot kiritdingiz");
        i--
      }else {
      seriesDB.genres = genres.split(', ')
      seriesDB.genres.sort()
      }
    

    seriesDB.genres.forEach((item, idx) => {
      console.log(`yaxshi korgan janringiz ${idx + 1} - nomi ${item}`);
    })
  },
  
}