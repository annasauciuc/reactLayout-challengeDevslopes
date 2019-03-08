// function getCity() {
//   let date = [];
//   const url =
//     "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/773692/";

//   fetch(url)
//     .then(response => {
//       console.log("response :", response);
//       return response.json();
//     })
//     .then(data => {
//       console.log("data :", data);
//       const today = data.consolidated_weather[0];
//       console.log(
//         `Today temperatures in  ${data.title} stay between ${Math.floor(
//           today.min_temp
//         )} and ${Math.floor(today.max_temp)}`
//       );
//       return (date = data);
//     })
//     .catch(error => console.log(error));
//   return date;
// }

// export { getCity };
