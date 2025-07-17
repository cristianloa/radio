document.addEventListener('DOMContentLoaded', function() {
  const stationsList = [
    { name: 'Radio Oxígeno', url: 'https://mdstrm.com/audio/5fab0687bcd6c2389ee9480c/icecast.audio' },
    { name: 'Radio Magica', url: 'https://mdstrm.com/audio/6839e28eb3fdc597ac2e2e43/icecast.audio?property=aiir&_=224873' },
    { name: 'Radio Felicidad', url: 'https://mdstrm.com/audio/5fad731fcf097a068af3c8f7/icecast.audio' },
    { name: 'Radio RPP', url: 'https://mdstrm.com/audio/5fab3416b5f9ef165cfab6e9/icecast.audio' },
    { name: 'Radio Exitosa', url: 'https://stream.zeno.fm/csy4vzackf9uv' },
    { name: 'Radio La Inolvidable', url: 'https://27263.live.streamtheworld.com/CRP_LI_SC?csegid=30008&dist=30008' },
    { name: 'Radio Panamericana', url: 'https://mdstrm.com/audio/6598b62dded1380470f4e539/icecast.audio' },
    { name: 'Radio Ritmo Romántica', url: 'https://23113.live.streamtheworld.com/CRP_RIT_SC?csegid=30008&dist=30008' },
    { name: 'Radio Corazón', url: 'https://mdstrm.com/audio/5fada514fc16c006bd63370f/icecast.audio' },
    { name: 'Radio Radiomar', url: 'https://23113.live.streamtheworld.com/CRP_MARAAC_SC' },
    { name: 'Radio Nueva Q', url: 'https://27163.live.streamtheworld.com/CRP_NQ_SC?csegid=30008&dist=30008' }, 
    { name: 'Radio Planeta', url: 'https://mdstrm.com/audio/6839e274f40e6b9832e37633/icecast.audio?property=aiir&_=481938' },
    { name: 'Radio Onda Cero', url: 'https://mdstrm.com/audio/6598b65ab398c90871aff8cc/icecast.audio' },
    { name: 'Radio Z Rock & Pop', url: 'https://radioz.egostreaming.pe/radio/3e4f6a1b2c3d4e567890abcd/' },
    { name: 'Radio Studio 92', url: 'https://mdstrm.com/audio/6598b65ab398c90871aff8cc/icecast.audio' }, // URL corregida como ejemplo
    { name: 'Radio Moda', url: 'https://14613.live.streamtheworld.com/CRP_MOD_SC?csegid=30008&dist=30008' },
    { name: 'Radio Exitoso', url: 'https://neptuno-2-audio.mediaserver.digital/79525baf-b0f5-4013-a8bd-3c5c293c6561' },
    { name: 'Radio Oasis', url: 'https://stream.zeno.fm/3bhmjhlsl0wvv' },
    { name: 'Radio las Quenas', url: 'https://radio.lnx.pe:7000/stream' },
    { name: 'Radio Salkantay', url: 'http://167.114.118.119:7662/stream' },
    { name: 'Radio Mega Stereo', url: 'https://cast1.my-control-panel.com/proxy/megaestereo/stream' },
    { name: 'Radio Coca Raymi', url: 'https://stream.zeno.fm/di4yvkfirz0vv' },
  ];

  const stationsContainer = document.getElementById('stations-list');
  const stationNameElement = document.getElementById('station-name');
  const audioSourceElement = document.getElementById('audio-source');
  const audioPlayerElement = document.getElementById('audio-player');

  stationsList.forEach(station => {
    const stationElement = document.createElement('div');
    stationElement.innerHTML = `
      <h3>${station.name}</h3>
      <button onclick="playStation('${station.name}', '${station.url}')" aria-label="Reproducir ${station.name}">
        Reproducir <span class="play-icon">▶</span>
      </button>
    `;
    stationsContainer.appendChild(stationElement);
  });

  window.playStation = function(name, url) {
    stationNameElement.innerText = name;
    audioSourceElement.src = url;
    audioPlayerElement.load();
    audioPlayerElement.play().catch(() => {
      stationNameElement.innerText = 'Error al reproducir la estación';
      alert('No se pudo cargar la estación. Por favor, intenta con otra.');
    });
  };

  audioPlayerElement.addEventListener('error', () => {
    stationNameElement.innerText = 'Error al reproducir la estación';
    alert('No se pudo cargar la estación. Por favor, intenta con otra.');
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.textContent = '☀️';
  } else {
    themeIcon.textContent = '🌙';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
