// Geolocalização
document.getElementById('findPoints').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPoints, showError);
  } else {
    alert('Geolocalização não suportada neste navegador');
  }
});

function showPoints(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  // Simulação de dados - na prática viria de uma API
  const points = [
    { name: "Ecoponto Central", distance: "1.2km" },
    { name: "Coleta Seletiva Jardins", distance: "2.5km" },
    { name: "Posto de Reciclagem Norte", distance: "3.1km" }
  ];

  displayResults(points);
}

function displayResults(points) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '<h2>Pontos Próximos:</h2>';

  points.forEach(point => {
    resultsDiv.innerHTML += `
            <div class="point-card">
                <h3>${point.name}</h3>
                <p>📏 ${point.distance} de distância</p>
                <button>🗺️ Ver Rota</button>
            </div>
        `;
  });
}
