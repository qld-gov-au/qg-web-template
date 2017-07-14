# jquery.status
## Quick Summary
jquery.status is a module that lets you display error/ information/ warning / success messsage in a modal box

## Dependencies
 - generate-id.js //TODO: Update with CDN link once hosted
 - jquery.resize-events.js //TODO: Update with CDN link once hosted
 - jquery.history.js //TODO: Update with CDN link once hosted
 - jquery.butterfly.js //TODO: Update with CDN link once hosted
 - butterfly.css //TODO: Update with CDN link once hosted
## Usage
Following script would display message in modal box
```
    $(document).status('show', {
        status: 'fail',
        lightbox: true,
        title: 'Error loading data',
        body: '<p>We were unable to retrieve data.</p><p>Please try again later.</p>',
        closeButtonImage: 'images/close.png'
    });
```
```status``` = info | warn | fail | success
```title``` = Title of message to display
```body``` = Message to display
```closeButtonImage``` = Path to modal box close button
