async function getCovidData() {
  const header = [
    { path: "TotalConfirmed" },
    { path: "TotalDeaths" },
    { path: "TotalRecovered" },
  ];
  const jsonData = await fetch("https://api.covid19api.com/summary");

  const jsoncov = await jsonData.json();
  const globalData = jsoncov.Global

  console.table(globalData );
  document.getElementById("cData").innerHTML = `
  <tr>
  <td>${globalData.TotalConfirmed}</td>
  <td>${globalData.TotalDeaths}</td>
  <td>${globalData.TotalRecovered}</td>
  </tr>
  `
   
    
}

getCovidData();
