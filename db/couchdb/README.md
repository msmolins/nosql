
# imdbpy2sql

Skrypt ten służy do umieszczenia danych z serwisu imdb.com w bazie danych (MySQL, PostgreSQL, SQLite, Firebird, MAX DB, Sybase, MSSQL).
Z [ftp]:ftp://ftp.fu-berlin.de/pub/misc/movies/database/ można pobrać zawartość [imdb.com](http://www.imdb.com/) podzieloną na kategorie archiwa zawierające dane w postaci pliku tekstowego.

### Wymagania

Oprócz samego pythona i konektorów baz danych, będzie potrzebny jeden z dwóch modułów: 

* [SQLObject](http://pypi.python.org/packages/source/S/SQLObject/SQLObject-0.15.0.tar.gz#md5=8c2babd0384840c8e3aadb753c105bbf)
* [SQLAlchemy](http://pypi.python.org/packages/source/S/SQLAlchemy/SQLAlchemy-0.6.6.tar.gz#md5=359f02242c52e92aa881c36c8e3720d8)

Instalacja modułów przebiega w następujący sposób

1.	pobranie archiwum
2.	rozpakowanie
3.	setup.py install
4.	i gotowe

### Sposób użycia

	imdbpy2sql.py -d /sciezkaDoFolderuZplainTextDataFiles/ -u 'URI'

Argument 'URI' jest to string odpowiedzialny za połączenie z bazą danych

	scheme://[user[:password]@]host[:port]/database[?parameters]

Gdzie 'scheme' jest jedną z wartości "sqlite", "mysql", "postgres", "firebird",
"interbase", "maxdb", "sapdb", "mssql", "sybase", "ibm_db_sa".

Przykłady:

    mysql://user:password@host/database
    postgres://user:password@host/database
    mysql://host/database?debug=1
    postgres:///full/path/to/socket/database
    postgres://host:5432/database
    sqlite:///full/path/to/database
    sqlite:/C|/full/path/to/database
    sqlite:/:memory:
	
# sql2json

Skrpyt, który umożliwia parsowanie danych z bazy danych do formatu json. Narazie obsuługuje bazę PostgreSQL.
Wywołanie skrpytu spowoduje zapisanie zawartości table z bazy danych do pliku json.

### Uruchamianie

Argumentami w linii poleceń są:
	nazwa bazy danych,
	nazwa użytkownika bazy danych,
	nazwa tabeli, która ma być sparsowana do json'a
	
Przykłdowe wywołanie skryptu:
	sql2json.py imdb sekret movie_link 