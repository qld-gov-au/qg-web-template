# Data module
## Quick Summary
data is a module that lets you fetch data from CKAN (data.qld.gov.au) through PostgreSQL queries 

## Dependencies
 - generate-id.js //TODO: Update with CDN link once hosted
 - jquery.resize-events.js //TODO: Update with CDN link once hosted
 - jquery.history.js //TODO: Update with CDN link once hosted
 - jquery.butterfly.js //TODO: Update with CDN link once hosted
 - jquery.status.bundle.js //TODO: Update with CDN link once hosted
 - jquery.jsonp.js //TODO: Update with CDN link once hosted
 
## Usage
Following script would fetch data from CKAN
```
    qg.data.get(dataEnvironment, sql, {
        cache: !0,
        modalCloseButtonImage: 'images/close.png',
        successCallback: function (data) {
            if (data.result.records.length > 0) {
                $.each(data.result.records, function (k, v) {
                    $('.search-result').append(v.Title + '<br>');
                });
            } else {
                $('.search-result').html('No records found');
            }
        }
    });
```
- ```dataEnvironment``` = staging.data.qld.gov.au | data.qld.gov.au
- ```sql``` = PostgreSQL query. Example: Select * from {RESOURCE_ID}
- ```successCallback``` = Function to execute when data is fetched
- ```modalCloseButtonImage``` = Path to modal box close button
