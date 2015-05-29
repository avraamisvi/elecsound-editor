var csoundServer;

/*
  Connects with the kcsound server.
*/
function connect() {
  csoundServer = new WebSocket("ws://localhost:8887");
}

/*
  Sendo current composition to the server
*/
function playComposition() {
	orc = " sr = 44100 \n" +
  " ksmps = 32 \n" +
  " nchnls = 2 \n" +
  " 0dbfs = 1 \n" +
  " instr 1 \n" +
  " aout vco2 0.5, 440 \n" +
  " outs aout, aout \n" +
  " endin \n";

  sco = "i1 0 60 \n";

  csoundServer.send(JSON.stringify({
    type: "PLAY",
    composition: {
    orchestra: orc,
  	score: sco,
  	compiledId: -1
  }}));
}
