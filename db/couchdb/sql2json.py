import json
import psycopg2
import sys

def db(database_name=sys.argv[1]):
    return psycopg2.connect(database=database_name, user=sys.argv[2])

def query_db(query, args=(), one=False):
    cur = db().cursor()
    cur.execute(query, args)
    r = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    cur.connection.close()
    return (r[0] if r else None) if one else r

if __name__=="__main__":
	#my_query = query_db("select * from %s" %sys.argv[3])
	my_query = query_db("SELECT movie_info.id, movie_info.info, title.title FROM public.movie_info, public.title WHERE movie_info.movie_id = title.id;")
	json_output = json.dumps(my_query)   
	#print json.dumps(my_query)   		
	file = open('imdb.json', 'w')
	file.write('{"docs":')
	file.write(json.dumps(my_query))
	file.write('}')
	file.close()