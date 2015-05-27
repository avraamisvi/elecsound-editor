                                                                                                                                                            
    var Engine    = famous.core.Engine;
    var Surface   = famous.core.Surface;
    var Modifier  = famous.core.Modifier;
    var Transform = famous.core.Transform;
    var Draggable = famous.modifiers.Draggable;

    var mainContext = Engine.createContext();

    //show a grid for reference
    var grid = new Surface({
        size: [481,481],
        classes: ['graph']
    });

    var draggable = new Draggable({
        snapX: 40, 
        snapY: 40, 
        xRange: [-220, 220],
        yRange: [-220, 220]
    });

    var surface = new Surface({
        size: [40, 40],
        content: 'drag',
        classes: ['red-bg'],
        properties: {
            lineHeight: '40px',
            textAlign: 'center',
            cursor: 'pointer'
        }
    });

    draggable.subscribe(surface);

    var node = mainContext.add(new Modifier({align: [.5, .5], origin:[0.5,0.5]}));
    node.add(grid);
    node.add(draggable).add(surface);
