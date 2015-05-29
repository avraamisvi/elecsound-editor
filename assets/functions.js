var csoundServer;

function connect() {
  csoundServer = new WebSocket("ws://localhost:8887");
}

function playComposition() {
	orc = "sr = 44100" +
  "ksmps = 32" +
  "nchnls = 2" +
  "0dbfs = 1" +
  "instr 1" +
  "aout vco2 0.5, 440" +
  "outs aout, aout" +
  "endin";

  sco = "i1 0 60";

  csoundServer
}
