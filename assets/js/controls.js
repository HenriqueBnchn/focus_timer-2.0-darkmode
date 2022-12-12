export default function Controls({
  running,
  body
}) {

  function changeButtonIconColor(elem) {
    let icon = String(elem.id) + "-icon"
    icon = document.querySelector(`#${icon}`)


    if (elem.style.backgroundColor == "var(--bg-btn-sound-active)") {
      elem.style.backgroundColor = "var(--bg-btn-sound-inactive)"
      icon.classList.add(`aa`)
      icon.classList.remove(`light`)
    } else {
      elem.style.backgroundColor = "var(--bg-btn-sound-active)"
      icon.classList.add(`aa`)
      console.log(icon)
      icon.classList.remove(`dark`)
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