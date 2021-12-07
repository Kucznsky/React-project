<h1> Dokumentacja projektu aplikacji zarządzania kinem: </h1>
## Autorzy projektu:
- Michał Kuczyński
- Daniel Pietrzeniuk
<br/>
## Architektura komponentów
<!--TO DO-->
## Ścieżki i komponenty związane z routigniem:
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
## Dane w store:
<!-- TODO  -->
## API serwera:
<!-- TODO  -->
## Wybrane przez autorów, szczególnie ciekawe fragmenty kodu:
<!-- TODO  -->
## Modele:
#### Z specyfikacji:
Sala:
- nr,
- pojemność.

Film:
- Tytuł,
- Czas trwania.

Seans:
- Data i godzina,
- Film,
- Sala,
- Liczba sprzedanych i dostępnych biletów,
- Numery zajętych miejsc.
#### Implied:
TakenSeat:
- Seans
- Siedzenie

## Funkcjonalności:
### Możliwe operacje:
- [x] Dodawanie i edycja filmu
    - [x] Usuwanie filmu
- [x] Dodawanie i edycja seansu
- [x] Kupowanie biletu (seans, nr miejsca)
###  Wyświetlanie seansów w danym dniu oraz seansów odbywających się obecnie (zaczynamy od bieżącego dnia i bieżącej godziny).
### Wyświetlanie popularności filmów w danych dniach (ilości sprzedanych biletów na dany film danego dnia)
<!-- TODO rozszerzyć i wyjaśnić co znaczy ten punkt -->


### Jakie endpointy:

# Punkty:
## Wymagane:
- [~] elementy aplikacji: sale (nr, pojemność/liczba osób), filmy (tytuł, czas trwania), seanse (data, godzina, film, sala, liczba sprzedanych i dostępnych biletów, numery zajętych miejsc),
- [ ] możliwe operacje:
    - [~] dodawanie/edycja filmu, dodawanie/edycja seansu - w każdym przypadku edycja na danych bieżących - 4pkt,
    - [~] usuwanie filmu - 1pkt
    - [~] kupowanie biletu (seans, nr miejsca) - 2pkt
- [~] wyświetlanie seansów w danym dniu, wyświetlanie aktualnie trwających seansów (zaczynamy od bieżącego dnia i bieżącej godziny) - 2pkt
    - Mogą być problemy bo zawiera bardziej zaawansowaną logikę i nie jest prawidłowo przetestowane.
- [~] wyświetlanie popularności danego filmu w poszczególnych dniach (tekstowo - max 2pkt) - 3pkt
    - Ten sam problem co z poprzednim punktem.
## Dodatkowe:
- [ ] własna walidacja danych wprowadzanych przez użytkownika ( w każdym przypadku wprowadzania danych) - 2pkt,
    - Jest na backu prawie całe zaimplementowane.
- [~] obowiązkowa weryfikacja typu danych (PropTypes) przekazywanych do wszystkich komponentów (nie stosujemy typu 'any') - 2pkt
    - PropTypes są zaimplementowane w kodzie, ale obecnie nie są używane.
- [ ] weryfikacja typu danych (PropTypes) własną funkcją - 1pkt
    - Trzeba zrobić research jak to zrobić.
- [x] właściwe użycie typów komponentów (czy każdy z komponentów jest właściwie odwzorowany na komponent funkcyjny lub stanowe) - 1pkt,
- [ ] dwukierunkowa komunikacja pomiędzy komponentami (czy jest w każdym spodziewanym przypadku) - 1pkt,
- [ ] modyfikacja danych odbywa się tylko w jednym komponencie - 1pkt
- [~] operacje modyfikacji danych za pomocą 4 rodzajów żądań http - 1pkt
    - Jest back.
- [ ] żądania do serwera są zapisane w jednym oddzielnym pliku - 1pkt
    - Nie jest to zbyt trudna rzecz.
- [x] routing (ścieżki 'routes', w tym jedna z parametrem) - 1pkt
- [ ] wykorzystanie dwóch zmiennych właściwości routingu - 1pkt
- [ ] architektura Flux - 3pkt
- [ ] testy jednostkowe/integracyjne komponentów (minimalnie 2 z 5 rodzajów:  renderowania, zdarzeń, przesyłania właściwości, komunikacji z serwerem, routing, za każdy napisany test 0,5pkt) - 3pkt
- [ ] testy architektury Flux (całej) - 2pkt

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
<!-- TODO  -->
