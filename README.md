![screenshot](https://raw.githubusercontent.com/kasiaizak/mdbootstrap/master/github/screenshot.jpg)

# Todo Lista

Zadanie rekrutacyjne - przycisk **Add** dodaje nowe zadanie z treścią *Task number #* gdzie # to numer zadania. Ponowne kliknięcie tego przycisku dodaje kolejne zadanie z następnym numerem. **Remove** usuwa ostatnie zadanie (o najwyższym numerze). **Clear** czyści całą listę - [widok on-line](https://kasiaizak.github.io/mdbootstrap/)

## Użyte technologie

HTML5 i CSS3 (biblioteka Material Design for Bootstrap), z użyciem preprocesora Sass oraz JavaScript (biblioteka jQuery)

## Uruchomienie strony lokalnie z podglądem zmian na żywo (dla developerów korzystających z Node.js)

Jeśli nie masz jeszcze zainstalowanego Node.js to nic straconego... :) Tu znajduje się instalka i można szybko to nadrobić: [oficjalna strona Node.js](https://nodejs.org/en/).

W konsoli (terminalu) wpisujemy poniższe polecenie w celu instalacji tzw. *task runnera* GULP. Polecenie wykonujemy raz na danej maszynie, czyli jeśli robiłeś/aś to już wcześniej to pomiń ten krok i poniższą komendę. Ważne: na Windowsie terminal uruchamiamy z uprawnieniami administratora.

`npm install -g gulp-cli`

### Inicjowanie projektu

Po sklonowaniu repozytorium na swój komputer wchodzimy do głównego katalogu projektu i wykonujemy poniższe polecenia:

`npm install` - polecenie uruchamiane raz na dany projekt

### Podgląd na żywo ze śledzeniem zmian

`gulp` - start *task runnera*

#### Kończenie pracy

Aby przerwać pracę *gulp* wciskamy kombinację klawiszy **CTRL** + **C**.

