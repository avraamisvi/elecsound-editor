function createPattern(scene){

  var node = scene.addChild();

  node.setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(250, 250)

  var domEl = new DOMElement(node, {
      content: 'Hello asdasdsad',
  });

  domEl.setProperty('background-color', 'lightgray')
            .setProperty('border-radius', '2%')
            .setProperty('border', '2px solid gray')


            var node2 = node.addChild();

            node2.setSizeMode('absolute', 'absolute', 'absolute')
                  .setAbsoluteSize(250, 250)

  var domEl2 = new DOMElement(node2, {
      content: 'sdasdasd',
  });

  //domEl.addComponent(domEl2);

  return domEl;
}

function createInstrument(domEl) {

}
