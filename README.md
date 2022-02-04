# pai-zaliczenie
Projektowanie aplikacji internetowych 2021/2022

<strong>Informatyka rok III grupa 2</strong>

<h2>Wykonali:</h2>

Bartosz Rucki 25095 <br/>
Jędrzej Zarzycki 24521

<h2>Dokumentacja</h2>

Aplikacja to "Dziennik Uczuć". <br/>
Zakładając konto i logując się, przekierowuje nas do menu głównego, które jest jednocześnie kontenerem na "wpisy" użytkownika.<br/>

Przycisk "logout" - wylogowanie.<br/>
Przycisk "create" - dodanie nowego wpisu.<br/>
Przycisk "sprawdź" - wyświetlenie szczegółów wybranego wpisu.<br/>
Wyszukiwarka wyszukująca wpisy po tytule oraz po humorze (mood).<br/>

Tworząc wpis wypełniamy:<br/>
<ul>
  <li>tytuł</li>
  <li>opis</li>
  <li>humor (do wyboru z listy)</li>
  <li>data</li>
 </ul>

Po dodaniu wpisu pojawi się na stronie głównej /home.<br/>

Po naciśnięciu przycisku "sprawdź" następuje przekierowanie do szczegółów wpisu, gdzie istnieje możliwość edycji i usunięcia wybranego wpisu za pomocą przycisków "Edit" i "Delete".<br/>

<h2>Uruchamianie</h2>

1. Kopiujemy repozytorium

```
git clone https://github.com/j-zarzycki/pai-zaliczenie.git
```

2. W folderach "backend" oraz "frontend" instalujemy wszystkie wymagane moduły

```
npm install
```

3. Stwórz docker image

```
docker-compose build
```

4. Uruchom stworzony kontener

```
docker-compose up
```

5. Uruchom serwer w folderze backend

```
node server.js
```

6. Włącz aplikacje klienta w folderze frontend

```
npm start
```
  
