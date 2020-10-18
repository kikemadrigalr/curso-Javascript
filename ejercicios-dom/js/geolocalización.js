export default function myGeolocation() {
  const $pLocation = document.getElementById("location");

  const location = (position) => {
    // console.log(position);
    let latitude = position.coords.latitude,
      longitude = position.coords.longitude,
      accuracy = position.coords.accuracy;

    const $locationLink = document.createElement("a");
    $locationLink.innerHTML = "Ver en Google Maps";
    $locationLink.target = "_blank";
    $locationLink.rel = "noopener";
    $locationLink.href = `https://www.google.com/maps/@${latitude},${longitude},20z?hl=es`;

    $pLocation.innerHTML = `
      <strong>Latitud:</strong> ${latitude} <br>
      <strong>Longitug: </strong> ${longitude} <br>
      <strong>Exactitud:</strong> ${accuracy} metros <br><br>
      `;

    $pLocation.insertAdjacentElement("beforeend", $locationLink);
  };

  const error = (err) => {
    swal(
      "No se Puede acceder a su ubicación",
      `Error: ${err.code}; ${err.message}`,
      "error"
    );
  };

  if (navigator.geolocation) {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximunAge: 0,
    };
    navigator.geolocation.getCurrentPosition(location, error, options);
  }
}
