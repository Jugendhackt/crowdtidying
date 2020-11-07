from flask import Flask
import mysql.connector


app = Flask('Hello_World_Test')  # name for the Flask app (refer to output)
# running the server


mydb = mysql.connector.connect(
    host="0.tcp.ngrok.io",
    port=19398,
    user="crowdtidying",
    password="helloWorld!2",
    database="crowdtidying",
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


app.run(debug=True)  # to allow for debugging and auto-reload
