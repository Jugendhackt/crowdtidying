from flask import Flask
import mysql.connector
from dotenv import load_dotenv
import os


app = Flask('Hello_World_Test')  # name for the Flask app (refer to output)
# running the server


load_dotenv()

mydb = mysql.connector.connect(
        host = os.getenv('DATABASEHOST'),
        port = os.getenv('DATABASEPORT'),
        user = os.getenv('DATABASEUSER'),
        password = os.getenv('DATABASEPASSWORD'),
        database = os.getenv('DATABASE'),
    )


@app.route('/', methods=['GET', 'POST', 'PUT'])  # decorator
def home():
    mycursor = mydb.cursor()

    mycursor.execute('SELECT * FROM teams')
    myresults = mycursor.fetchall()
    results = ''
    for i in myresults:
        results += str(i)
    return results
    # route handler function
    # returning a response




#@app.route('/event.js',methods = ['GET'])
#def eventJS():
    #mycursor = mydb.cursor()
    #x = 'var dreckigeOrte = ['
    #mycursor.execute('SELECT * FROM collection_action')
    #myresults = mycursor.fetchall()
    #for i in myresults:
        #x += '[' + i[0] + i[1] + '"' i[2]'"]'


app.run(debug=True)  # to allow for debugging and auto-reload
