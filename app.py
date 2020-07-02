import os
from flask import Flask, render_template, request, session, redirect, url_for
from functools import wraps
from flask_pymongo import PyMongo
from passlib.hash import pbkdf2_sha256 # Hashing algorithm for Passlib 
from os import path
if path.exists("env.py"):
    import env

app = Flask(__name__)

app.config['MONGO_DBNAME'] = os.getenv('MONGO_DBNAME')
app.config['MONGO_URI'] = os.getenv('MONGO_URI')
# app.secret_key = os.getenv("SECRET_KEY")
mongo = PyMongo(app)

#-------------- Password login for blog ---------------------

""" This function looks to see if a user is logged in, if so 
    allows the user on there way, if not redirects to the not 
    loggedin page """

def check_logged_in(func):
    @wraps(func)
    def wrapped_function(*args, **kwargs):
        if 'logged-in' in session:
            return(func(*args, **kwargs))
        else:
            return render_template('nologin.html')
    return wrapped_function


@app.route("/register", methods=["GET", "POST"])
def register():
    # The GET request renders the page with the form to register.
    if request.method == "GET":
        return render_template("register.html", page_title="Register")
    # The POST request take the infomation from the form and encrypts the password 
    # then inserts the form data into mongoDB via insert_one, then it redirects to 
    # the login page.   
    elif request.method == "POST":
        username = request.form['userid']
        email = request.form['email']
        password = request.form['password']
        encryptedPass = pbkdf2_sha256.hash(password)
        mongo.db.users.insert_one({
            'username': username,
            'email': email,
            'password': encryptedPass,
        })
        return redirect(url_for('login'))


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html", page_title="Login")
     elif request.method == "POST":

@app.route("/nologin")
def nologin():
    return render_template("nologin.html", page_title="NoLogin")


@app.route("/secretpage")
@check_logged_in
def secretpage():
    return render_template("secretpage.html", page_title="Secret")




#------------- Standard site wide routing -------------------

@app.route("/")
def index():
    return render_template("index.html", page_title="Home")


@app.route("/resume") 
def resume():
    return render_template("resume.html", page_title="Resume")


@app.route("/github") 
def github():
    return render_template("github.html", page_title="GitHub")


@app.route("/hobbies") 
def hobbies():
    return render_template("hobbies.html", page_title="Hobbies")


@app.route("/contact") 
def contact():
    return render_template("contact.html", page_title="Contact")


@app.errorhandler(404)
def page_not_found(error):
   return render_template("404.html", page_title ="404")


if __name__ == "__main__":
    app.run(host=os.environ.get('IP', '127.0.0.1'),
            port=int(os.environ.get('PORT', 5000)),
            debug=True) 
