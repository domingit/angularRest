# PentahospitalsTask

technical assignment for the interview of senior frontend developers

## Development server

Run `ng start` for a dev server. Navigate to `http://localhost:4220/`. The application will automatically reload if you change any of the source files.

## Technology
- angular 16
- angular material

## Assignment
### Dog Breed DB
The aim of this task is to create an Angular application that will display a list of dog breeds,
according to the specified design and parameters. The API https://www.thedogapi.com/ will
be used to fetch data, with its documentation here:
https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
.

#### Description of the required functionality:
● Display 10 results from the API https://api.thedogapi.com/v1/breeds using
the API key
live_SuYPHKLerg5vyOCBxpw08WTn8UWjmClTAyDquG1l3MV3uhuXMXcKAn51T4Un2Q0m
● Display only the breeds that have additional breed information. There's a
parameter for that.
● A simple list will be displayed with the breed name and a button at the end of
the item.
● After clicking the "show more" button, additional information from the API
will be fetched https://api.thedogapi.com/v1/images/[reference_image_id].
The visual of the open profile is shown on the third item.
● Above the list is an input, which will filter the list by breed name. The filtering
is only local, there's no need to call the API again. After filtering, the count of
displayed results is updated.
● The visual should resemble the attached one, but there's no need to
fine-tune it in detail (e.g., the input).
● Send the output of this task as packed source files or upload it to a private git
repo.
● Happy coding!

#### Design:
The design parameters are here:
https://xd.adobe.com/view/f37a46d1-46cf-46a8-b9cb-92e53558e1fd-a629/
