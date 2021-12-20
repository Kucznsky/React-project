# Dokumentacja strony zarządzania seansami w kinie:

## Autorzy projektu:

- Michał Kuczyński
- Daniel Pietrzeniuk

## Architektura
### Pasek nawigacji:
- W pliku Homebar.js znajduje się komponent stanowy Homebar, znajdują się w nim linki do dtrony głównej, listy sal, listy repertuarów oraz listy filmów (funkcjonalności opisane w sekcjach poniżej)
- Komponent renderowany jest w App.js
### Wyświetlanie listy sal:
 - W pliku ScreeningRoomList.js znajdują się komponenty funkcyjne ScreeningRoomList oraz Room. 
 - W ScreeningRoomList dane zostają pobrane z API przy pomocy React Hooks, następnie wewnątrz komponentu zostaje mapowana lista, której pojedyńczym elementem jest komponent   Room, który przyjmuje parametry pobrane z API (id sali kinowej oraz ilości miejsc), a następnie wyświetla je. 
 - Typ danych podawanych do komponentu Room jest weryfikowany przez PropTypes.
 - Komponent ScreeningRoomList renderowany jest w pliku App.js.
### Wyświetlanie seansów:
 - W pliku Repertoire.js znajduje się komponent Repertoire, pobiera on dane z Api, a następnie wyświetla na ekra.
 - Jest Renderowany w App.js.
### Wyświetlanie listy filmów: 
- W pliku MovieList.js znajuduje się komponent MovieList, który pobiera dane z API poprzez React Hooks oraz mapuje listę której pojedyńczym elementem jest komponent Movie.
- Komponent Movie otrzymuje w parametrze pobrane dane (tytuł filmu oraz czas trwania), które wyświetla.
- Poprawność typu danych jest sprawdzana poprzez PropTypes.
- Dodatkowo komponent Room ma w sobie link, który ma w parametrze id danego filmu (routing z parametrem), dzięki czemu kliknięcie elementu listy filmów przekierowuje do komponentu MovieDetails, w którym wyświetlane są szczegółowe dane wybranego filmu. Sam komponent MovieDetails znajduje się w oddzielnym pliku MovieDetails.js, a renderowany jest w pliku App.js.
- Komponent MovieList renderowany jest w pliku App.js
### Dodawanie filmów: 
- Komponent renderujący formulaż dodawania filmu nazywa się AddMovie i znajduje się w pliku AddMovie.js.
- Jest to komponent klasowy, w stanie są przetrzymywane dane wprowadzone przez użytkownika, które zostaną wysłane do bazy danych.
- Użytkownik chcąc dodać nowy film musi podać tytuł filmu oraz czas jego trwania.
- Wprowadzone przez użytkownika dabe podlegają walidacji funkcją wewnątrz komponentu, dane zostaną zaakceptowane jeśli tytuł będzie zaczynał się wielką literą, w czasie trwania filmu zostaną wprowadzone tylko liczby, oraz wszystkie rubryczki nie pozostaną puste
- Dodany film pojawi się w liście filmów wyświetlanej przez komponent MovieList
- Komponent AddMovie jest renderowany w App.js, a można się do niego dostać poprzez link w komponencie MovieList.
## Ścieżki i komponenty związane z routingiem:

- "/": HomePage
- "/repertoire": Repertoire
- "/rooms": ScreeningRoomsList
- "/movies": MovieList
- "/movies/:id": MovieDetails
- "/purchase/:id": Purchase
- "/add_movie": AddMovie
- "/edit_movie": EditMovie
- "/repertoire/add_showing": AddShowing
- "/repertoire/edit_showing": EditShowings
- "/movie_popularity": MoviePopularity
- "/purchase/success": Purchase_success
## API serwera:

- https://localhost:5001/Films
- https://localhost:5001/Film/{index}
- https://localhost:5001/Films/FilmPopularity
- https://localhost:5001/Reservation/{index}
- https://localhost:5001/Reservation
- https://localhost:5001/Rooms
- https://localhost:5001/Rooms/{index}
- https://localhost:5001/Screenings
- https://localhost:5001/Screening/{index}
- https://localhost:5001/Screenings/ScreeningsInDay
- https://localhost:5001/Screenings/ScreeningNow

## Wypunktowane elementy techniczne, które zostały zrealizowane w projekcie wraz z krótkim komentarzem odnośnie realizacji: jak zrealizowano i w którym pliku:

- własna walidacja danych wprowadzanych przez użytkownika ( w każdym przypadku wprowadzania danych) - funkcja wywoływana po wprowadzeniu danych przez użytkownika; pliki: AddMovie.js
- obowiązkowa weryfikacja typu danych (PropTypes) przekazywanych do wszystkich komponentów (nie stosujemy typu 'any') - pliki: MovieList.js, ScreeningRoomList.js
- właściwe użycie typów komponentów (czy każdy z komponentów jest właściwie odwzorowany na komponent funkcyjny lub stanowe)
- operacje modyfikacji danych za pomocą 4 rodzajów żądań http
- routing (ścieżki 'routes', w tym jedna z parametrem) - pliki: App.js

## Dodatkowe biblioteki użyte w aplikacji: link oraz zdanie opisu biblioteki i celu użycia.

### React-router-dom

- https://www.npmjs.com/package/react-router-dom
- Biblioteka zawierająca elementy niezbędne do dodania w aplikacji routingu.
- Cel: Dodanie routingu komponentów w celu wydzielenia poszczególnych funkcjonalności w aplikacji w oddzielnych widokach przy jednoczesnym zachowaniu zasad aplikacji SPA.

### Axios

- https://www.npmjs.com/package/axios
- Biblioteka umożliwiająca komunikację aplikacji z serwerem danych.
- Cel: Wykorzystanie axios.get do pobrania danych, axios.post do wysłania danych, axios.put do edycji danych oraz axios.delete do usunięcia danych.

### React Date Picker

- https://www.npmjs.com/package/react-datepicker
- Biblioteka dodaje gotowy komponent w postaci interaktywnego kalendarza, za pomocą któego można wybierać datę.
- Cel: komponent DatePicker został użyty w komponencie MoviePopularity służącym do sprawdzania ile biletów zostało zakupionych na poszczególne filmy w danym dniu.

### Font awesome

- https://www.npmjs.com/package/font-awesome
- Biblioteka zawiera gotowe ikony.
- Cel: Użycie wybranych ikon w celu zwiększenia estetyki interfejsu aplikacji.

## Podział pracy w zespole:

- Daniel Pietrzeniuk: backend, Purchase, HomePage, Repertoire
- Michał Kuczyński: Routing, PropTypes, walidacja, HomeBar, AddMovie, MovieList, ScreeningRoomList, stylizacja w CSS
