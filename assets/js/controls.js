export default function Controls({
  running,
  body
}) {

  function changeButtonIconColor(elem) {
    let icon = elem.id + "-icon"
    icon = document.querySelector(`#${icon}`)

    let slider = elem.id + "-volume"
    slider = document.querySelector(`#${slider}`)

    if (elem.style.backgroundColor == "var(--bg-btn-sound-active)") {
      elem.style.backgroundColor = "var(--bg-btn-sound-inactive)"
      icon.style.fill = "var(--icon-sound-inactive)" 
      slider.style.backgroundColor = "#000"
      
    } else {
      elem.style.backgroundColor = "var(--bg-btn-sound-active)"
      icon.style.fill = "var(--icon-sound-active)"
      slider.style.backgroundColor = "#fff"
    }
  }

  function verifySoundState(elem) {
    let id = elem.id
    let audio = document.querySelector(`#${id}-audio`)
    let volume = document.querySelector(`#${id}-volume`)

    if (running == undefined) {
      audio.volume = Number(volume.value)/10
      audio.play()
      volume.addEventListener('change', function(){
        audio.volume = Number(volume.value)/10
      })
      changeButtonIconColor(elem)
      running = id
    } else {
      audio.pause()
      changeButtonIconColor(elem)
      running = undefined
    }
  }

  return{
    changeButtonIconColor,
    verifySoundState
  }
}