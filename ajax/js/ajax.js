//**********XMLHttpRequest**********
(() => {
  //instancia del objeto ttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //asignar el o los eventos que se van a manejar
  //el evento readystatechange
  //sera lanzado cuando detecte cualquier cambio de estado
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    // // console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      // // console.log(xhr.responseText);
      // $xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      // // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);

      // // console.log("Exito");
    } else {
      // // console.log("Error");

      let message = xhr.statusText || "Ocurrio un Error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  //abrir la peticion con metodo open
  //el primer parametro, es el metodo con el ccual se enviaran los datos
  //el segundo parametro es la URL a la cual se va a hacer la peticion
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  // xhr.open("GET", "users.json");

  //envial la peticion con el metodo send
  xhr.send();
})();

//**********FETCH**********
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  //fetch recibe como parametro la url a donde se haran las peticiones
  //y como segundo parametro un objeto de opciones
  //en este 0objeto se puede especificar el metodo que su utilizara para hacer la ´peticion
  //si no se especifica un metodo, fetch usa el metodo GET por defecto
  fetch("https://jsonplaceholder.typicode.com/users")
    // fetch("users.json")
    .then((res) => {
      // // console.log(res);
      //validar si ocurre un error y convertir la respuesta a formato json
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      // // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((error) => {
      // // console.log(error);

      let message = error.statusText || "Ocurrio un Error";
      $fetch.innerHTML = `Error ${error.status}: ${message}`;
    })
    .finally(() => {
      // console.log(
      //   "Finally: Se ejecutara independientemente del resultado de la promesa Fetch"
      // );
    });
})();

//**********API Fetch + Async Await**********
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  //funcion asyncrona para manejar la peticion
  async function getData() {
    try {
      // await se coloca para decirle a JS que espere la respuesta del servidor antes de ejecutar la siguiente linea de codigo
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      // // console.log(res, json);

      //manipular el error
      //se verifica la propiedad ok, si es falso con throw se pasa el error al catch
      if (!res.ok) {
        // throw new Error("Ocurrio un Error al soliitar los Datos");
        throw { status: res.status, statusText: res.statusText };
      }

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrio un Error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
      // // console.log(err);
    } finally {
      // console.log(
      //   "Finally: Se ejecutara independientemente del resultado del try y el catch"
      // );
    }
  }

  //ejecucion de la funcion
  getData();
})();

//********** AXIOS ***********/
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  //petición
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resp) => {
      let json = resp.data;
      // console.log(resp);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((error) => {
      // console.log("Catch", error.response);

      let message = error.response.statusText || "Ocurrio un Error";
      $axios.innerHTML = `Error ${error.response.status}: ${message}`;
    })
    .finally(() => {
      // console.log(
      //   "Esto se ejecutará independientemente del resultado de Axios"
      // );
    });
})();

// ***********Axios y Async Await**********
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let resp = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await resp.data;
      // console.log(resp, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (error) {
      // console.log(error.response);
      let message = error.response.statusText || "Ocurrio un Error";
      $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`;
    }
  }

  getData();
})();

//Rick and Morty API
(() => {
  const $rmList = document.getElementById("rick-morty"),
    $fragment = document.createDocumentFragment();

  async function getCharacters() {
    try {
      let resp = await fetch("https://rickandmortyapi.com/api/character"),
        json = await resp.json(),
        characters = json.results;

      // console.log(resp, characters);

      if (!resp.ok) {
        throw { status: resp.status, statusText: resp.statusText };
      }

      characters.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.species} -- ${el.status}`;
        $fragment.appendChild($li);

        $rmList.appendChild($fragment);
      });
    } catch (error) {
      let message = error.statusText || "Ocurrio un Error";
      $rmList.innerHTML = `Error ${error.status}: ${message}`;
    }
  }

  getCharacters();
})();
