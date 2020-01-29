tinymce.PluginManager.add('callout', function(editor) {
  var openDialog = function () {
    return editor.windowManager.open({
      title: 'Callout',
      body: {
        type: 'panel',
        items: [
          {
            type: 'input',
            name: 'title',
            label: 'Callout Title'
          }
        ]
      },
      buttons: [
        {
          type: 'cancel',
          text: 'Close'
        },
        {
          type: 'submit',
          text: 'Save',
          primary: true
        }
      ],
      onSubmit: function (api) {
        var data = api.getData();
        // Insert content when the window form is submitted
        //editor.insertContent('Title: ' + data.title);
        if (data.title) {
	       editor.insertContent('<div class="callout"><h3>' + data.title + '</h3><p>' + data.content + '</p></div>'); 
        } else {
          editor.insertContent('<div class="callout"><p>' + data.content + '</p></div>'); 
        }
        console.log('Color: ' + data.colorinput);
        api.close();
      }
    });
  };

  // Add a button that opens a window
  editor.ui.registry.addButton('callout', {
    text: 'Callout',
    onAction: function () {
      // Open window
      openDialog();
    }
  });

  // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
  editor.ui.registry.addMenuItem('callout', {
    text: 'Callout plugin',
    onAction: function() {
      // Open window
      openDialog();
    }
  });
});