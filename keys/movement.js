let movementModal = (message, override = false) => {
    window = Window.focused();
    screen = Screen.main().flippedVisibleFrame();

    Modal.build({
        origin(modal) {
            return {
                x: (screen.width / 2) - (modal.width / 2),
                y: (screen.height / 2)
            }
        },
        weight: 20,
        duration: 1,
        appearance: 'dark',
        icon: window.app().icon(),
        text: override ? message + ' ' + window.app().name() : 'Moving ' + window.app().name() + ' to the ' + message
    }).show();
}

// Move focused window to left or right half
var leftHalf = new Key('h', MOD, () => {
    if (VERBOSE) { movementModal('left half'); }
    Window.focused().setFrame(windowLocations.left);
});

var rightHalf = new Key('s', MOD, () => {
    if (VERBOSE) { movementModal('right half'); }
    Window.focused().setFrame(windowLocations.right);
});

// Move focused window to corners
var topRight = new Key('g', MOD, () => {
    if (VERBOSE) { movementModal('top right'); }
    Window.focused().setFrame(windowLocations.topRight);
});

var topLeft = new Key('c', MOD, () => {
    if (VERBOSE) { movementModal('top left'); }
    Window.focused().setFrame(windowLocations.topLeft);
});

var bottomRight = new Key('r', MOD, () => {
    if (VERBOSE) { movementModal('bottom right'); }
    Window.focused().setFrame(windowLocations.bottomRight);
});

var bottomLeft = new Key('l', MOD, () => {
    if (VERBOSE) { movementModal('bottom left'); }
    Window.focused().setFrame(windowLocations.bottomLeft);
});

// Maximize window (not fullscreen)
var maximizeWindow = new Key('m', MOD, () => {
    if (VERBOSE) { movementModal('Maximizing', true); }
    Window.focused().setFrame(windowLocations.full); //.maximize();
});

// Minimize window
let minimizeWindow = new Key('n', MOD, () => {
    if (VERBOSE) { movementModal('Minimizing', true); }
    Window.focused().minimize();
});

let fullscreenWindow = new Key('f', MOD, () => {
    let w = Window.focused();
    if (w.isFullScreen()) {
        Window.focused().setFullScreen(false);
    } else {
        Window.focused().setFullScreen(true);
    }
});
