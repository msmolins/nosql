import csv
import json

f = open( 'movie.csv', 'r' )
reader = csv.DictReader( f, fieldnames = ("name", "program_creator", "air_date_of_first_episode", "air_date_of_final_episode", "number_of_episodes", "episode_running_time", "country_of_origin", "genre", "currently_in_production") )
#out = json.dumps( [ row for row in reader ] )
#print out
file = open('movie.json', 'w')
file.write('{"docs":')
file.write(json.dumps( [ row for row in reader ] ))
file.write('}')
file.close()