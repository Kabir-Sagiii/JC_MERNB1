function wishMessage(message) {
  if (message === "gm") {
    //message === "gm"
    console.log("Good Morning, Kabir"); //      gn === gm
  } else if (message === "ga") {
    console.log("Good Afternoon, Kabir");
  } else if (message === "ge") {
    console.log("Good Evening, Kabir");
  } else if (message === "gn") {
    console.log("Good Night Kabir");
  } else {
    console.log("No Wish Message for Kabir");
  }
}

wishMessage("gn");
