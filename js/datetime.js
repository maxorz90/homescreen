function showTime() {
  const date = new Date();

  let today = date.toLocaleString("en", { weekday: "long" });
  let hour = date.toLocaleString("nl", { hour: "2-digit" });
  let minute = date.toLocaleString("en", { minute: "2-digit" });
  let second = date.toLocaleString("en", { second: "2-digit" });
  let day = date.toLocaleString("en", { day: "2-digit" });
  let month = date.toLocaleString("en", { month: "2-digit" });
  let year = date.toLocaleString("en", { year: "numeric" });

  document.getElementById("date")
    .innerHTML = `${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`;

  setTimeout(showTime, 0)
}

showTime();
