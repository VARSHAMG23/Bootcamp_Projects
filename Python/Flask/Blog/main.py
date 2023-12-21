from flask import Flask, request, redirect, url_for, session, render_template
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)
app.secret_key = 'Varshamg@23'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Vijaya@23'
app.config['MYSQL_DB'] = 'blogplatform'

mysql = MySQL(app)
def is_admin():
    return session.get('loggedin') and session.get('is_admin')

@app.route('/', methods=['GET', 'POST'])
def home():
   return render_template('home.html')



# LOGIN
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST' and 'uname' in request.form and 'pswd' in request.form:
        
        uname = request.form['uname']
        pswd = request.form['pswd']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE uname= %s AND pswd= %s', (uname, pswd))
        data = cursor.fetchone()
      
        # if data:
        #     session['loggedin'] = True
        #     session['user_id'] = data['user_id']
        #     session['uname'] = data['uname']
        #     session['pswd'] = data['pswd']
            
        #     return render_template('welcome.html',message=data)
        # else:
           
        #     return redirect('/register')
        if data:
            session['loggedin'] = True
            session['user_id'] = data['user_id']
            session['uname'] = data['uname']
            session['pswd'] = data['pswd']
            if data['user_id'] ==12:
        
                 cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
                 cursor.execute('SELECT * FROM users ')
                 data = cursor.fetchall()
                 
                 return render_template('allusers.html',message=data)
           
            else:
               return render_template('welcome.html',message=data)
        else :
           
           return redirect('/register')

    return render_template('login.html ')

# Register
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        uname = request.form['uname']
       
        email = request.form['email']
        pswd = request.form['pswd']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('INSERT INTO users(uname,email,pswd) VALUES(%s,%s,%s)',(uname,email,pswd))
        mysql.connection.commit()
        return redirect('/login')

    return render_template('register.html')


# UPDATE
@app.route('/update/<int:user_id>', methods=['GET','POST'])
def update(user_id):

    if request.method =='GET':
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from users where user_id=%s ',(user_id,))
        data= cursor.fetchone()
        if data!=None:
            return render_template('update.html',message=data)

        return redirect('/register')
    if request.method == 'POST':
        user_id=user_id
        title = request.form['title']
        content= request.form.get('content')
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute( """ update users set title=%s,content=%s where user_id=%s""",(title,content,user_id))
        mysql.connection.commit()
        cursor.execute('SELECT * FROM users WHERE user_id= %s',(user_id,))
        data=cursor.fetchone()
        return render_template('welcome.html',message=data)

    return render_template('update.html')


# Update user profile
@app.route('/profile/<int:user_id>', methods=['GET','POST'])
def profile(user_id):

    if request.method =='GET':
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from users where user_id=%s ',(user_id,))
        data= cursor.fetchone()
        if data!=None:
            return render_template('profile.html',message=data)

        return redirect('/register')
    if request.method == 'POST':
        user_id=user_id
        uname = request.form['uname']
        email= request.form.get('email')
        pswd= request.form.get('pswd')
        gender= request.form.get('gender')
        dob= request.form.get('dob')


        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute( """ update users set uname=%s,email=%s ,pswd=%s ,gender=%s,dob=%s where user_id=%s""",(uname,email,pswd,gender,dob,user_id))
        mysql.connection.commit()
        cursor.execute('SELECT * FROM users WHERE user_id= %s',(user_id,))
        data=cursor.fetchone()
        return render_template('welcome.html',message=data)

    return render_template('profile.html')


# Edit content for a specific user
@app.route('/edit/<int:user_id>', methods=['GET', 'POST'])
def edit_content(user_id):
    if request.method == 'GET':
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE user_id=%s', (user_id,))
        data = cursor.fetchone()
        
        if data is not None:
            return render_template('edit.html', message=data)
        
        return redirect('/register')

    if request.method == 'POST':
        user_id = user_id
        content = request.form.get('content')

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('UPDATE users SET content=%s WHERE user_id=%s', (content, user_id))
        mysql.connection.commit()

        cursor.execute('SELECT * FROM users WHERE user_id=%s', (user_id,))
        data = cursor.fetchone()

        return render_template('welcome.html', message=data)

    return render_template('edit.html')

#delete Post
@app.route('/delete/<int:user_id>',methods=['GET'])
def deletepost(user_id):
    if request.method == 'GET':
        identity = user_id
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from users where user_id=%s and user_id=%s', (user_id, user_id))
        data = cursor.fetchone()
        if data!= None:
            cursor.execute('update users set content=null where  user_id=%s',(identity,))
            mysql.connection.commit()
            # return redirect(url_for('/'))
            return render_template('welcome.html',message=data)
        return f'User with id {user_id} do not exist'
    # ############################################################## #
  
  #Delete a user
@app.route('/deleteaccount/<int:user_id>',methods=['GET'])
def deleteuser(user_id):
    if request.method == 'GET':
        identity = user_id
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from users where user_id=%s and user_id=%s', (user_id, user_id))
        data = cursor.fetchone()
        if data!= None:
            cursor.execute('delete from users where  user_id=%s and user_id=%s',(identity,identity,))
            mysql.connection.commit()
            return redirect('/')
        return f'User with id {user_id} do not exist'

    
@app.route('/allusers', methods=['GET'])
def allusers():
    if request.method == 'GET' :
        
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users ')
        data = cursor.fetchall()
        if data:
            return render_template('allusers.html',message=data)
        
# Assuming your app variable is named 'app'
@app.route('/user_details/<int:user_id>')
def user_details(user_id):
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('SELECT * FROM users WHERE user_id=%s', (user_id,))
    user_data = cursor.fetchone()
    
    if user_data:
        return render_template('user_details.html', user_data=user_data,message=user_data)
    else:
        return render_template('error.html', message='User not found')
    
# Assuming your app variable is named 'app'


# Assuming your app variable is named 'app'

# Assuming your app variable is named 'app'
@app.route('/admin_edit/<int:user_id>', methods=['GET', 'POST'])
def admin_edit_content(user_id):
    if request.method == 'GET':
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE user_id=%s', (user_id,))
        data = cursor.fetchone()
        
        if data is not None:
            return render_template('edit_user_details.html', message=data)
        
        return redirect('/register')

    if request.method == 'POST':
        user_id = user_id
       
        title = request.form.get('title')
        content = request.form.get('content')

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('UPDATE users SET title=%s,content=%s WHERE user_id=%s', (title,content, user_id))
        mysql.connection.commit()

        cursor.execute('SELECT * FROM users WHERE user_id=%s', (user_id,))
        data = cursor.fetchone()

        # return render_template('welcome.html', message=data)
        return redirect('/allusers')

    return render_template('edit.html')
if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', debug=True)
