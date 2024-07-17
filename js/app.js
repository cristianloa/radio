document.addEventListener('DOMContentLoaded', function() {
  const stationsList = [
    { name: 'Radio Oxígeno', url: 'https://mdstrm.com/audio/5fab0687bcd6c2389ee9480c/icecast.audio' },
    { name: 'Radio Felicidad', url: 'https://mdstrm.com/audio/5fad731fcf097a068af3c8f7/icecast.audio' },
    { name: 'Radio Oxígeno', url: 'https://mdstrm.com/audio/5fab0687bcd6c2389ee9480c/icecast.audio' },
    { name: 'Radio Felicidad', url: 'https://mdstrm.com/audio/5fad731fcf097a068af3c8f7/icecast.audio' },
    { name: 'Radio Oxígeno', url: 'https://mdstrm.com/audio/5fab0687bcd6c2389ee9480c/icecast.audio' },
    { name: 'Radio Felicidad', url: 'https://mdstrm.com/audio/5fad731fcf097a068af3c8f7/icecast.audio' },
    { name: 'Radio Oxígeno', url: 'https://mdstrm.com/audio/5fab0687bcd6c2389ee9480c/icecast.audio' },
    { name: 'Radio Felicidad', url: 'https://mdstrm.com/audio/5fad731fcf097a068af3c8f7/icecast.audio' },
    
  ];

  const stationsContainer = document.getElementById('stations-list');
  const stationNameElement = document.getElementById('station-name');
  const audioSourceElement = document.getElementById('audio-source');
  const audioPlayerElement = document.getElementById('audio-player');

  stationsList.forEach(station => {
    const stationElement = document.createElement('div');
    stationElement.innerHTML = `
      <h3>${station.name}</h3>
      <button onclick="playStation('${station.name}', '${station.url}')">Escuchar</button>
    `;
    stationsContainer.appendChild(stationElement);
  });

  window.playStation = function(name, url) {
    stationNameElement.innerText = name;
    audioSourceElement.src = url;
    audioPlayerElement.load();
    audioPlayerElement.play();
  };
});
