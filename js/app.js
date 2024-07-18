document.addEventListener('DOMContentLoaded', function() {
  const stationsList = [
    { name: 'Radio Oxígeno', url: 'https://mdstrm.com/audio/5fab0687bcd6c2389ee9480c/icecast.audio' },
    { name: 'Radio Felicidad', url: 'https://mdstrm.com/audio/5fad731fcf097a068af3c8f7/icecast.audio' },
    { name: 'Radio RPP', url: 'https://mdstrm.com/audio/5fab3416b5f9ef165cfab6e9/icecast.audio' },
    { name: 'Radio Exitosa', url: 'https://stream.zeno.fm/csy4vzackf9uv' },
    { name: 'Radio La Inolvidable', url: 'https://27263.live.streamtheworld.com/CRP_LI_SC?csegid=30008&dist=30008' },
    { name: 'Radio Panamericana', url: 'https://mdstrm.com/audio/6598b62dded1380470f4e539/icecast.audio' },
    { name: 'Radio Ritmo Romántica', url: 'https://23113.live.streamtheworld.com/CRP_RIT_SC?csegid=30008&dist=30008' },
    { name: 'Radio Corazón', url: 'https://mdstrm.com/audio/5fada514fc16c006bd63370f/icecast.audio' },
    { name: 'Radio Radiomar', url: 'https://23113.live.streamtheworld.com/CRP_MARAAC_SC' },
    { name: 'Radio Nueva Q', url: 'https://27163.live.streamtheworld.com/CRP_NQ_SC?csegid=30008&dist=30008' }, 
    { name: 'Radio Planeta', url: 'https://24463.live.streamtheworld.com/CRP_PLA_SC?csegid=30008&dist=30008' },
    { name: 'Radio Onda Cero', url: 'https://mdstrm.com/audio/6598b65ab398c90871aff8cc/icecast.audio' },
    { name: 'Radio Z Rock & Pop', url: 'https://radioz.egostreaming.pe/radio/3e4f6a1b2c3d4e567890abcd/' },
    { name: 'Radio Studio 92', url: 'https://gcdn.2mdn.net/videoplayback/id/0751c120d4c7c8a1/itag/345/source/web_video_ads/xpc/EgVovf3BOg%3D%3D/ctier/L/acao/yes/ip/0.0.0.0/ipbits/0/expire/1752812287/sparams/ip,ipbits,expire,id,itag,source,xpc,ctier,acao/signature/36B65E93093AE4B3E88C9C65B223187B837A084D.3E4DFCA2EC3288AF4DF879EDD389CCBEBE88331C/key/ck2/file/file.mp4' },
    { name: 'Radio Moda', url: 'https://14613.live.streamtheworld.com/CRP_MOD_SC?csegid=30008&dist=30008' },
    { name: 'Radio Exitoso', url: 'https://neptuno-2-audio.mediaserver.digital/79525baf-b0f5-4013-a8bd-3c5c293c6561' },
    { name: 'Radio Oasis', url: 'https://stream.zeno.fm/3bhmjhlsl0wvv' },
    { name: 'Radio las Quenas', url: 'https://radio.lnx.pe:7000/stream' },
    { name: 'Radio Salkantay', url: 'http://167.114.118.119:7662/stream' },
    { name: 'Radio Mega Stereo', url: 'https://cast1.my-control-panel.com/proxy/megaestereo/stream' },
    { name: 'Radio Coca Raymi', url: 'https://stream.zeno.fm/di4yvkfirz0vv' },
    { name: 'Radio Naranjal', url: 'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQWpGaVlXuYDfjm5y3PdJCtZ-eZN_LOlDelgA' },
    { name: 'Radio ', url: 'https' },
    { name: 'Radio ', url: 'https' },

    { "name": "Radio 1", "url": "https://rugby-mad-nokia-admitted.trycloudflare.com/stream?1718287105538" },
    { "name": "Radio 2", "url": "https://panelautodj.innovatestream.pe:10951" },
    { "name": "Radio 3", "url": "https://radioz.egostreaming.pe/radio/3e4f6a1b2c3d4e567890abcd/" },
    { "name": "Radio 4", "url": "https://stream.zeno.fm/5115vsdnnnruv" },
    { "name": "Radio 5", "url": "https://stream.zeno.fm/tk4wmqvnnnruv" },
    { "name": "Radio 6", "url": "https://mpc1.mediacp.eu:8952" },
    { "name": "Radio 7", "url": "https://turadio.accesopanel.com:7031" },
    { "name": "Radio 8", "url": "https://live.radiotv.net.pe:8048" },
    { "name": "Radio 9", "url": "https://conectperu.com:8082" },
    { "name": "Radio 10", "url": "https://15723.live.streamtheworld.com/CRP_PLA.mp3" },
    { "name": "Radio 11", "url": "https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio-aw/6598b70f86344b02b58ce836?aid=658ddcc0b2c7835d48fee06d&pid=RtrhYZ2qC8KJnyroqy8XMQ7iujpEfPeF&sid=L0oMle6D3MJKxoOTr3ZVrvFjv27nG2fR&uid=QeILxxTSuGlLmDnXuEyElQpbBhqYWC9h&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1718338699731&ot=Km6WjFEylA4yaIktK7_mUw&proto=https&pz=us&cP=128000&awCollectionId=658ddcc0b2c7835d48fee06d&liveId=6598b70f86344b02b58ce836&referer=https%3A%2F%2Fwww.radiolanube.com%2F&listenerId=QeILxxTSuGlLmDnXuEyElQpbBhqYWC9h" },
    { "name": "Radio 12", "url": "https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio-aw/6598b6e1261d9e088a6de859?aid=658ddcc0b2c7835d48fee06d&pid=6bH6g266buoS8TKvwV4gcYhFUDU01LHL&sid=XXEZrRxc11JzfzJOUiPuasalWOpoIuhm&uid=Cun2IYeI7cgP3BnxDkmhT4UwTA8JYo3u&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1718340389775&ot=n93tvd3FUUWGa4YgyF_Dtw&proto=https&pz=us&cP=128000&awCollectionId=658ddcc0b2c7835d48fee06d&liveId=6598b6e1261d9e088a6de859&referer=https%3A%2F%2Fwww.radio1160.com.pe%2F&listenerId=Cun2IYeI7cgP3BnxDkmhT4UwTA8JYo3u" },
    { "name": "Radio 13", "url": "https://turadio.accesopanel.com:7241" },
    { "name": "Radio 14", "url": "https://51.159.100.25:8016/stream" },
    { "name": "Radio 15", "url": "http://audio.sonoravirtual.com:8000/" },
    { "name": "Radio 16", "url": "http://167.114.118.119:7662" },
    { "name": "Radio 17", "url": "https://sp1.prostreamingmedia.com:8006" },
    { "name": "Radio 18", "url": "https://streamconex.com:8134/stream" },
    { "name": "Radio 19", "url": "http://216.245.210.78:9900/stream" },
    { "name": "Radio 20", "url": "http://213.32.121.35:8050/radio.mp3" },
    { "name": "Radio 21", "url": "http://64.37.50.226:8195/stream" },
    { "name": "Radio 22", "url": "http://189.113.5.195:8000/winamp32" },
    { "name": "Radio 23", "url": "http://162.243.173.18:8057/stream" },
    { "name": "Radio 24", "url": "http://209.126.119.28:8016/stream" },
    { "name": "Radio 25", "url": "https://67.205.165.76:7004/" },
    { "name": "Radio 26", "url": "https://maggie.torontocast.com:8046/stream" },
    { "name": "Radio 27", "url": "https://jenny.torontocast.com:8142/stream" },
    { "name": "Radio 28", "url": "http://185.33.21.111:80/90s_mobile_mp3" },
    { "name": "Radio 29", "url": "http://185.33.21.112:80/90s_64" },
    { "name": "Radio 30", "url": "http://185.33.21.111:80/crock_64" },
    { "name": "Radio 31", "url": "https://azura.streamingradio.online:8090/radio.mp3" },
    { "name": "Radio 32", "url": "http://54.36.89.71:8742/stream" },
    { "name": "Radio 33", "url": "http://212.30.80.195:9032/rock" },
    { "name": "Radio 34", "url": "http://142.132.213.6:8020/stream" },
    { "name": "Radio 35", "url": "http://5.135.83.159:80/stream3" },
    { "name": "Radio 36", "url": "http://genexservicios.com:8284/stream" }
  ];

  const stationsContainer = document.getElementById('stations-list');
  const stationNameElement = document.getElementById('station-name');
  const audioSourceElement = document.getElementById('audio-source');
  const audioPlayerElement = document.getElementById('audio-player');

  stationsList.forEach(station => {
    const stationElement = document.createElement('div');
    stationElement.innerHTML = `
      <h3>${station.name}</h3>
      <button onclick="playStation('${station.name}', '${station.url}')"></button>
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
