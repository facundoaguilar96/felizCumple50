function main() {
  // const songCumpleaños = document.querySelector(".song");
  // const songBoton = document.querySelector(".song-buttom");
  // songBoton.addEventListener("click", () => {
  //   songCumpleaños.muted = false;
  //   songCumpleaños.play = true;
  // });

  getGaleria().then((res) => {
    for (const w of res) {
      addGaleria(w);
    }
  });
}
main();
