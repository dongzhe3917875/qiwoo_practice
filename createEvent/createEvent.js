function registerEvent(type, options) {
  var evt = document.createEvent("Events");
  evt.initEvent(type, false, false);
  for (var i in options) {
    evt[i] = options[i];
  }
  window.dispatchEvent(evt);
}

function trigger() {
  registerEvent("trigger", {
    a: "aaaaa",
    b: "bbbbb",
    c: "ccccc"
  });
}

window.addEventListener("trigger", function(event) {
  console.log(event.b);
});
trigger();
