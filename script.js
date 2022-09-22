function digiclock() {
  let d = new Date();

  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let meridian = "";
  if (hour < 12) meridian = "AM";
  else meridian = "PM";
  hour = ((hour + 11) % 12) + 1;
  return `${hour}:${minutes}:${seconds} ${meridian}`;
}

setInterval(() => {
  const t = document.querySelector("#time");
  t.innerHTML = digiclock();
}, 1000);
