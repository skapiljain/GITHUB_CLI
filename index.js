function getduration() {
    const arg = process.argv.slice(2);
    const durationIndex = arg.indexOf("--duration");
      let Duration;
     if(durationIndex!==-1){
         Duration = arg[durationIndex + 1]
     }
     else{
        Duration = "week";
     }
      
      const limitIndex = arg.indexOf("--limit");
   let Limit;
    if(  limitIndex !==-1){
         Limit= arg[limitIndex + 1]
     }
     else{
          Limit = 10;
     }
     return {
        duration : Duration,
        limit: Limit
     }
}
function fetchdata(duration,limit) {
    const timeline = getConvertDuration(duration);
    const url =
        `https://api.github.com/search/repositories?q=created:>${timeline}&sort=stars&order=desc&per_page=${limit}`;
        
    fetch(url)
        .then(res => {

      if (res.status!== 200)
          throw new Error(res.status) ;

      return res.json()

  })
        .then(data => {
            if (!data.items) {
                console.log("API Error:", data);
                return;
            }
            if(!data.items.length){
                console.log("EMPTY FEILD",data);
                return;
            }
            console.log("GITHUB_REPO:",data.items.length);
            let count =1;
            data.items.forEach(repo => {
    console.log(count+".");
   console.log("NAME:"+repo.name);
   console.log("Description:"+repo.description );
   console.log("Stars:"+repo.stargazers_count );
   console.log("Langauge:"+repo.language);
   count++;
   console.log("----------------------------------------------------------------------------------------------------")
})
        })
        .catch(err => console.error(err));
}
function getConvertDuration(duration){
   const today = new Date();
   const daysmap ={
    day: 1,
    week : 7,
    month: 30,
    year :365
   } 
   const day = daysmap[duration];
   if(!day){
   throw new Error("Invalid duration");
    }

    today.setDate(today.getDate() - day);

    return today.toISOString().split("T")[0];
}
const user = getduration()
console.log(user);

fetchdata(user.duration,user.limit);


