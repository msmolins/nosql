## Info

Skrpyt, który umożiwia parsowanie danych z bazy danych do formatu json. Narazie obsuługuje bazę postgresql.
Wywołanie skrpytu spowoduje wyświetlenie na ekranie konsoli zawartości pliku json, lecz go nie zapisuje.

## Sposób uruchomienia

Argumentami w linii poleceń są:
	nazwa bazy danych,
	nazwa użytkownika bazy danych,
	nazwa tabeli, która ma być sparsowana do json'a

Zapisanie danych do pliku json odbywa się poprzez dodanie do wywołnia linii poleceń
	> nazwaPliku.json
	
Przykłdowe wywołanie skryptu:
	sql2json.py imdb sekret movie_link > movie_link.json
	
By móc zaimportować dane do couch'a trzeba tylko na początku pliku dopisać
	{"docs":
i na końcu zamknąć
	}

	

