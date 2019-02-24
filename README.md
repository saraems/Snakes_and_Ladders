# Snakes and Ladders | ENG
Classic board game

The game has been written as a my second project IN Vanilla.js, ScsS, HTML and Gulp task runer. 

The project's idea was taken from the challenge [codewars.com](https://www.codewars.com/kata/snakes-and-ladders-1/train/java).

The aim of the project was to exercise structure planing, implementation of JS logic and creating a layout using Flex-box without RWD implementation.


#### `Conclusions:`

The game uses many global variables that were declared in the main script, they are used and overwritten by several different functions, because of that only few funcrions have been exported. Those which use global variables and at the same time do not overwrite them (changeDicePrint.js, movePlayersPiece.js) that allows to maintain some transparency of the structure.

The order of the main script: import, variable, board construction, functions, program run.


#### `What could be changed:`

- split the script's structure into more sub-modules to make the code more readable
- use object programming in JS by creating a class of single game, this modulation would also increase the legibility of the code preventing functions or variables overwriting in the program
- implement a class change instead of direct changge of element's background in the dice roll animation
- standardize CSS style pattern of each HTML element, e.g. sizes, spacing, colors etc.


#### `What I learned when writing the project:`

Using time functions in JS (setInterval, setTimeout), modulation (export, import), use of flex-box, creating dialog windows, gulp configuration, forms validation, creating simple animations with CSS and JS, using git commands
 



# Węże i Drabiny | PL
Klasyczna gra planszowa

Gra napisana jako drugi samodzielny projekt z wykorzystaniem Vanilla.js, ScsS, HTML oraz Gulp task runer. 
Pomysł został zaczerpnięty z wyzwania [codewars.com](https://www.codewars.com/kata/snakes-and-ladders-1/train/java). 

Celem projektu było przćwiczenie planowania struktury projektu, implementacji logiki JS oraz tworzenia spójnego layoutu z wykorzystaniem FlexBoxa, w projekcie nie zostało zaimplementowane RWD.


#### `Wnioski:` 

Gra korzysta z wielu zmiennych globalnych, które zostały zadeklarowane w głównym skrypcie, są one wykorzystywane i nadpisywane przez kilka różnych funkcji dlatego nie zdecydowałam się na export każdej z funkcji do podrzędnego modułu.

Porządek głównego skryptu: importy, zmienne, budowa planszy, funkcje, przebieg programu.
 
Funkcje które zostały wyeksportowane, wykorzystują zmienne globalne jednocześcnie nie nadpisując ich (changeDicePrint.js, movePlayersPiece.js) pozwala to w pewnym stopniu zachować przejrzystość struktury.


#### `Co możnaby napisać inaczej:`

- podzielić stukturę skryptu na więcej podmodułów, aby kod był bardziej czytelny
- wykorzystać programowanie obiektowe w JS tworząc klasę pojedyńczej rozgrywki, taka modulacja rówznież zwiększyłaby czytelność kodu wydzialejąc fragment rozgrywki wraz z jej metodami zapobiegając nadpisywania się funkcji czy zmiennych w pozostałych częściach programu, gdyby program miał się rozrastać w przyszłości
- w funkcji animacji rzutu kostką, możnaby zaimplementować zmianę klasy zamiast bezpośredniej zmiany tła elementu
- ujednolicyć zapisu styli elementów HTML według jednego wzoru np. rozmiary, odstępy, kolory etc. 


#### `Czego się nauczyłam podczas pisania projektu:`

Wykorzystania funkcji czasu w JS (setInterval, setTimeout), modulacji (export, import), zastosowania flex-boxa, tworzenia okien dialogowych, konfiguracji gulp, validacji formularzy, tworzenia prostych animacji w połączeniu CSS oraz JS, komend git

![snakesandladdersboard](https://user-images.githubusercontent.com/43315389/53305777-b7fb0d00-3885-11e9-9d82-7e176ac6c1ad.jpg)
