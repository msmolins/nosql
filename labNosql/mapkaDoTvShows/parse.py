import re
   
o = open("file.json","w")   
data = open("daysInCountries.json").read()
data.replace("{\"key\":","")  
temp = data.replace("{\"key\":","")
temp.replace("},\"value\":{",",")
o.write(temp.replace("},\"value\":{",","))
o.close()