const data = [
    {
        name: 'Banana Stem - Organic',
        size: 1, // Size is in kilograms
        price: 66.9, // Price is in Indian rupees
        offer: "Buy 2 and get 25% off", // Optional attribute
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus. Fringilla phasellus faucibus scelerisque eleifend donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra vitae congue eu consequat ac. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Volutpat commodo sed egestas egestas fringilla. Diam maecenas ultricies mi eget. Tincidunt ornare massa eget egestas purus viverra accumsan in. Feugiat vivamus at augue eget arcu dictum varius duis. In iaculis nunc sed augue. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sodales ut etiam sit amet nisl purus in mollis nunc. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.
        
        Viverra vitae congue eu consequat ac felis donec. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Morbi tincidunt augue interdum velit euismod in pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies integer. Tellus rutrum tellus pellentesque eu. Sit amet nulla facilisi morbi tempus iaculis urna. Scelerisque purus semper eget duis at tellus at urna. Egestas fringilla phasellus faucibus scelerisque eleifend. Ut morbi tincidunt augue interdum velit. Nibh sed pulvinar proin gravida. Nisi est sit amet facilisis magna. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        `
    },
    {
        name: 'Green Beans - Organic',
        size: 5, // Size is in kilograms
        price: 66.9, // Price is in Indian rupees
        offer: "Buy 2 and get 25% off", // Optional attribute
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus. Fringilla phasellus faucibus scelerisque eleifend donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra vitae congue eu consequat ac. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Volutpat commodo sed egestas egestas fringilla. Diam maecenas ultricies mi eget. Tincidunt ornare massa eget egestas purus viverra accumsan in. Feugiat vivamus at augue eget arcu dictum varius duis. In iaculis nunc sed augue. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sodales ut etiam sit amet nisl purus in mollis nunc. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.

        Viverra vitae congue eu consequat ac felis donec. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Morbi tincidunt augue interdum velit euismod in pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies integer. Tellus rutrum tellus pellentesque eu. Sit amet nulla facilisi morbi tempus iaculis urna. Scelerisque purus semper eget duis at tellus at urna. Egestas fringilla phasellus faucibus scelerisque eleifend. Ut morbi tincidunt augue interdum velit. Nibh sed pulvinar proin gravida. Nisi est sit amet facilisis magna. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        `
    },
    {
        name: 'Apple - Red Delicious - Premium',
        size: 1, // Size is in kilograms
        price: 23.9, // Price is in Indian rupees
        offer: "Buy 2 and get 25% off", // Optional attribute
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus. Fringilla phasellus faucibus scelerisque eleifend donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra vitae congue eu consequat ac. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Volutpat commodo sed egestas egestas fringilla. Diam maecenas ultricies mi eget. Tincidunt ornare massa eget egestas purus viverra accumsan in. Feugiat vivamus at augue eget arcu dictum varius duis. In iaculis nunc sed augue. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sodales ut etiam sit amet nisl purus in mollis nunc. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.

        Viverra vitae congue eu consequat ac felis donec. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Morbi tincidunt augue interdum velit euismod in pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies integer. Tellus rutrum tellus pellentesque eu. Sit amet nulla facilisi morbi tempus iaculis urna. Scelerisque purus semper eget duis at tellus at urna. Egestas fringilla phasellus faucibus scelerisque eleifend. Ut morbi tincidunt augue interdum velit. Nibh sed pulvinar proin gravida. Nisi est sit amet facilisis magna. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        `
    },
    {
        name: 'Apricot - Premium',
        size: 1, // Size is in kilograms
        price: 25.3, // Price is in Indian rupees
        offer: "Buy 2 and get 25% off", // Optional attribute
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus. Fringilla phasellus faucibus scelerisque eleifend donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra vitae congue eu consequat ac. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Volutpat commodo sed egestas egestas fringilla. Diam maecenas ultricies mi eget. Tincidunt ornare massa eget egestas purus viverra accumsan in. Feugiat vivamus at augue eget arcu dictum varius duis. In iaculis nunc sed augue. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sodales ut etiam sit amet nisl purus in mollis nunc. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.

        Viverra vitae congue eu consequat ac felis donec. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Morbi tincidunt augue interdum velit euismod in pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies integer. Tellus rutrum tellus pellentesque eu. Sit amet nulla facilisi morbi tempus iaculis urna. Scelerisque purus semper eget duis at tellus at urna. Egestas fringilla phasellus faucibus scelerisque eleifend. Ut morbi tincidunt augue interdum velit. Nibh sed pulvinar proin gravida. Nisi est sit amet facilisis magna. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        `
    },
    {
        name: 'Beetroot - Julienne',
        size: 1, // Size is in kilograms
        price: 103.3, // Price is in Indian rupees
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus. Fringilla phasellus faucibus scelerisque eleifend donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra vitae congue eu consequat ac. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Volutpat commodo sed egestas egestas fringilla. Diam maecenas ultricies mi eget. Tincidunt ornare massa eget egestas purus viverra accumsan in. Feugiat vivamus at augue eget arcu dictum varius duis. In iaculis nunc sed augue. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sodales ut etiam sit amet nisl purus in mollis nunc. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.

        Viverra vitae congue eu consequat ac felis donec. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Morbi tincidunt augue interdum velit euismod in pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies integer. Tellus rutrum tellus pellentesque eu. Sit amet nulla facilisi morbi tempus iaculis urna. Scelerisque purus semper eget duis at tellus at urna. Egestas fringilla phasellus faucibus scelerisque eleifend. Ut morbi tincidunt augue interdum velit. Nibh sed pulvinar proin gravida. Nisi est sit amet facilisis magna. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        `
    },
    {
        name: 'Apple - Queenrose - Premium',
        size: 1, // Size is in kilograms
        price: 333.9, // Price is in Indian rupees
        offer: "Buy 3 and get 25% off", // Optional attribute
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus. Fringilla phasellus faucibus scelerisque eleifend donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra vitae congue eu consequat ac. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Volutpat commodo sed egestas egestas fringilla. Diam maecenas ultricies mi eget. Tincidunt ornare massa eget egestas purus viverra accumsan in. Feugiat vivamus at augue eget arcu dictum varius duis. In iaculis nunc sed augue. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sodales ut etiam sit amet nisl purus in mollis nunc. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.

        Viverra vitae congue eu consequat ac felis donec. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Morbi tincidunt augue interdum velit euismod in pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies integer. Tellus rutrum tellus pellentesque eu. Sit amet nulla facilisi morbi tempus iaculis urna. Scelerisque purus semper eget duis at tellus at urna. Egestas fringilla phasellus faucibus scelerisque eleifend. Ut morbi tincidunt augue interdum velit. Nibh sed pulvinar proin gravida. Nisi est sit amet facilisis magna. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        `
    },
    {
        name: 'Brinjal - Organic',
        size: 1, // Size is in kilograms
        price: 223.9, // Price is in Indian rupees
        offer: "Buy 2 and get 25% off", // Optional attribute
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus. Fringilla phasellus faucibus scelerisque eleifend donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra vitae congue eu consequat ac. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Volutpat commodo sed egestas egestas fringilla. Diam maecenas ultricies mi eget. Tincidunt ornare massa eget egestas purus viverra accumsan in. Feugiat vivamus at augue eget arcu dictum varius duis. In iaculis nunc sed augue. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sodales ut etiam sit amet nisl purus in mollis nunc. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.

        Viverra vitae congue eu consequat ac felis donec. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Morbi tincidunt augue interdum velit euismod in pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies integer. Tellus rutrum tellus pellentesque eu. Sit amet nulla facilisi morbi tempus iaculis urna. Scelerisque purus semper eget duis at tellus at urna. Egestas fringilla phasellus faucibus scelerisque eleifend. Ut morbi tincidunt augue interdum velit. Nibh sed pulvinar proin gravida. Nisi est sit amet facilisis magna. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        `
    },
]

export default data;
