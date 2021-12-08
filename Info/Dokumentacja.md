# Dokumentacja strony zarządzania seansami w kinie:

## Autorzy projektu:

- Michał Kuczyński
- Daniel Pietrzeniuk

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
  -Michał Kuczyński: Routing, PropTypes, walidacja, HomeBar, AddMovie, MovieList, ScreeningRoomList, stylizacja w CSS
