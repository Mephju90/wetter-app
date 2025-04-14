async function wetterAbrufen() {
    const stadt = document.getElementById("stadt").value;
    const apiKey = "590dd236305e440e2aaf05728ac62e81";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${stadt}&appid=${apiKey}&units=metric&lang=de`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Stadt nicht gefunden");
  
      const daten = await response.json();
      const ausgabe = document.getElementById("ausgabe");
  
      ausgabe.innerHTML = `
        <h2>${daten.name}, ${daten.sys.country}</h2>
        <p><strong>Temperatur:</strong> ${daten.main.temp} °C</p>
        <p><strong>Wetter:</strong> ${daten.weather[0].description}</p>
        <p><strong>Wind:</strong> ${daten.wind.speed} m/s</p>
      `;
    } catch (error) {
      document.getElementById("ausgabe").innerHTML = `<p style="color:red;">Fehler: ${error.message}</p>`;
    }
  }
  