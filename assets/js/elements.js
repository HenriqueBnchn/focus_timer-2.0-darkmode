const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")

const btn_play = document.querySelector("#play")
const btn_stop = document.querySelector("#stop")
const btn_plus = document.querySelector("#plus")
const btn_minus = document.querySelector("#minus")

const btn_forest = document.querySelector("#forest")
const icon_forest = document.querySelector("#forest-icon")
const btn_crowd = document.querySelector("#crowd")
const icon_crowd = document.querySelector("#crowd-icon")
const btn_rain = document.querySelector("#rain")
const icon_rain = document.querySelector("#rain-icon")
const btn_fire = document.querySelector("#fire")
const icon_fire = document.querySelector("#fire-icon")



const forest_volume = document.querySelector('#forest-volume')
const forest_audio = document.querySelector('#forest-audio')

const slide_container = document.querySelectorAll(".slidecontainer")

const btn_light = document.querySelector('#light')
const btn_dark = document.querySelector('#dark')

const body = document.querySelector('body')


let running


export const Elements ={
  minutesDisplay,
  secondsDisplay,

  btn_crowd,
  icon_crowd,
  btn_fire,
  icon_fire,
  btn_forest,
  icon_forest,
  btn_rain,
  icon_rain,

  btn_play,
  btn_stop,
  btn_plus,
  btn_minus,

  running,

  forest_volume,
  forest_audio,
  slide_container,

  btn_light,
  btn_dark,

  body
}