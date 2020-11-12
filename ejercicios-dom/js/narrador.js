const d = document,
  w = window;

export default function speechText() {
  const $msg = d.querySelector("#msg"),
    $voiceSelect = d.querySelector(".narrador select"),
    $textInput = d.querySelector(".narrador textarea"),
    $btnSpeak = d.getElementById("lector"),
    speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  // const speakText = (txt) => {
  //   const text = new SpeechSynthesisUtterance(txt);
  //   speechSynthesis.speak(text);
  // };

  d.addEventListener("DOMContentLoaded", (e) => {
    if ("speechSynthesis" in window) {
      $msg.innerHTML = `Tu navegador <strong>Soporta</strong> Speech Synthesis`;

      w.speechSynthesis.addEventListener("voiceschanged", (e) => {
        voices = w.speechSynthesis.getVoices();
        // console.log(voices);
        voices.forEach((voice) => {
          let option = d.createElement("option");
          option.value = voice.name;
          option.innerHTML = `${voice.name} - ${voice.lang}`;

          $voiceSelect.appendChild(option);
        });
      });
    } else {
      $msg.innerHTML = `Tu navegador <strong>NO Soporta</strong> Speech Synthesis`;
    }
  });

  d.addEventListener("change", (e) => {
    if (e.target === $voiceSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $btnSpeak) {
      if ($textInput.value === "") {
        swal("Ups!", "Debes Ingresar el Texto a narrar", "error");
      } else {
        // let $textSpeech = $textInput.value;
        // speakText($textSpeech);
        speechMessage.text = $textInput.value;
        w.speechSynthesis.speak(speechMessage);
      }
    }
  });
}
