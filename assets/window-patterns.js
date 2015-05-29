
function createPatternWindow(){

  $(document.body).append(nunjucks.render(__dirname + '/templates/patternWindow.html'));
  interact.maxInteractions(Infinity);

  interact('#patternWindowPanel', { context: document })
  .draggable({
      //inertia: true,
      autoScroll: true,
      max: Infinity,
      restrict: {
        drag: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      }
  }).on('dragmove', function (event) {  // call this function on every move

    var target = event.target,
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    if ('webkitTradnsform' in target.style || 'dtransform' in target.style) {
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';
    }
    else {
        target.style.left = x + 'px';
        target.style.top  = y + 'px';
    }

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  });
}
