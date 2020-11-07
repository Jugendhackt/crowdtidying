#hier kommt das backend hin
import mysql.connector
from dotenv import load_dotenv
import os
load_dotenv()

mydb = mysql.connector.connect(
        host = os.getenv('DATABASEHOST'),
        port = os.getenv('DATABASEPORT'),
        user = os.getenv('DATABASEUSER'),
        password = os.getenv('DATABASEPASSWORD'),
        database = os.getenv('DATABASE'),
    )

mycursor = mydb.cursor()


#mycursor.execute('INSERT INTO teams VALUES(NULL,x,y,NULL)')


mycursor.execute('SELECT* FROM teams')
myresults = mycursor.fetchall()


for i in myresults:
    print(i)