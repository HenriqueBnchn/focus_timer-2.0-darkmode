import { Elements } from "./elements.js";

const {
  btn_crowd,
  btn_fire,
  btn_forest,
  btn_minus,
  btn_play,
  btn_plus,
  btn_rain,
  btn_stop,
  slide_container
} = Elements

export default function Events({
  timer,
  controls
}) {

  btn_play.addEventListener('click', function () {
    timer.countdown()
  })

  btn_stop.addEventListener('click', function () {
    timer.pause()
  })

  btn_plus.addEventListener('click', function () {
    timer.plus()
  })

  btn_minus.addEventListener('click', function () {
    timer.minus()
  })


  btn_forest.addEventListener('click', function () {
    controls.verifySoundState(btn_forest)
  })

  btn_rain.addEventListener('click', function () {
    controls.verifySoundState(btn_rain)
  })

  btn_crowd.addEventListener('click', function () {
    controls.verifySoundState(btn_crowd)
  })

  btn_fire.addEventListener('click', function () {
    controls.verifySoundState(btn_fire)
  })

  slide_container.forEach(element => {
    element.addEventListener('click', function(event) {
      event.stopPropagation()
    })
  })
}