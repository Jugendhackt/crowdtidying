#hier kommt das backend hin
import mysql.connector


mydb = mysql.connector.connect(
        host="0.tcp.ngrok.io",
        port=19398,
        user="crowdtidying",
        password="helloWorld!2",
        database="crowdtidying",
    )

mycursor = mydb.cursor()

mycursor.execute('SELECT* FROM teams')
myresults = mycursor.fetchall()


for i in myresults:
    print(i)