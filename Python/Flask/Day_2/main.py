from flask import Flask, request, redirect, url_for, session, render_template
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)
app.secret_key = 'Varshamg@23'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Vijaya@23'
app.config['MYSQL_DB'] = 'userprofile'

mysql = MySQL(app)


@app.route('/loginpage', methods=['GET', 'POST'])
def login():
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        print("Welcome")
        username = request.form['username']
        password = request.form['password']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE USERNAME=%s AND PASSWORDS=%s', (username, password))
        user = cursor.fetchone()
        if user:
            session['loggedin'] = True
            session['ID'] = user['ID']
            session['USERNAME'] = user['USERNAME']
            message = 'login success'
            return render_template('index.html', message=message)
        else:
            message = 'invalid credentials'
            return render_template('Login.html', message=message)
    return render_template('Login.html ')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        phone = request.form['phone']
        address = request.form['address']
        city = request.form['city']
        state = request.form['state']
        country = request.form['country']
        postcode = request.form['postcode']

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(
            'INSERT INTO USERS(USERNAME,PASSWORDS,EMAIL,PHONE,ADDRESS,CITY,STATE,COUNTRY,POSTCODE) VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)',
            (username, password, email, phone, address, city, state,country, postcode))
        mysql.connection.commit()
        return redirect('/loginpage')


    return render_template('Register.html')


#
@app.route('/updateuser/<int:id>', methods=['GET','POST','PUT'])
def updateuser(id):
    message = ''
    if request.method =='GET':
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from USERS where id=%s and id=%s',(id,id))
        user = cursor.fetchone()
        if user!=None:
            return render_template('update.html', message=user)

        return redirect('/register')
    if request.method == 'POST':
        ID=id
        username = request.form.get('username',False)
        password = request.form.get('password',False)
        email = request.form.get('email',False)
        phone = request.form.get('phone',False)
        address = request.form.get('address',False)
        city = request.form.get('city',False)
        state = request.form.get('state',False)
        country = request.form.get('country',False)
        postcode = request.form.get('postcode',False)

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(
            """ UPDATE USERS
            SET USERNAME=%s,PASSWORDS=%s,EMAIL=%s,PHONE=%s,ADDRESS=%s,CITY=%s,
             STATE=%s,COUNTRY=%s,POSTCODE=%s where id=%s""",(username,password,email,phone,address,city,state,country,postcode,ID)
            )

        mysql.connection.commit()
        return redirect('/loginpage')

    return render_template('update.html')


@app.route('/deleteuser/<int:id>',methods=['GET'])
def deleteduser(id):
    if request.method == 'GET':
        identity = id
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from USERS where id=%s and id=%s', (id, id))
        user = cursor.fetchone()
        if user!= None:
            cursor.execute('delete from USERS where id=%s and id=%s',(identity,identity))
            mysql.connection.commit()
            return f'User with id {id} deleted'
        return f'User with id {id} do not exist'


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='81', debug=True)
