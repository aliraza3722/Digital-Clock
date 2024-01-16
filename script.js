document.addEventListener("DOMContentLoaded", function () {
    setInterval(showTime, 1000);
  });
  const showTime = function () {
    let date = new Date();

    var hr= date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    // console.log("hours" + hours + " mins" + mins + " secs" + secs);
    hr = hr<10 ? hr : hr;
    mins = mins<10 ? mins : mins;
    secs = secs<10 ? secs : secs;
     time.innerHTML = `${hr}:${mins}:${secs}`;
     formadtime.innerHTML = hr>12 ? "AM" : "PM";
  };