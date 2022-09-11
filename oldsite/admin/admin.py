from flask import Flask, Blueprint, render_template, session, request, url_for, redirect, current_app
from functools import wraps
from passlib.hash import pbkdf2_sha256 # Hashing algorithm for Passlib 
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import os
from os import path
if path.exists("env.py"):
    import env


admin = Blueprint("admin", __name__, static_folder="static", template_folder="templates")

app = Flask(__name__)
app.config['MONGO_DBNAME'] = os.getenv('MONGO_DBNAME')
app.config['MONGO_URI'] = os.getenv('MONGO_URI')
app.secret_key = os.getenv("SECRET_KEY")
mongo = PyMongo(app)

#------------------------------ Password login for blog --------------------------------------

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


@admin.route("/register", methods=["GET", "POST"])
@check_logged_in
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
        return redirect(url_for('admin.login'))


""" This function directs the usert to a login box interigates the
database and and sees if a user is registered and if the password
and email are correct, if not a warning message is displayed.
"""
@admin.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html", page_title="Login")

    elif request.method == "POST":
        """ Check to see if the Email & password are correct """
        email = request.form['email']
        user = mongo.db.users.find_one({'email': email})
        if user:
            user_password = user['password']
            form_password = request.form['password']
            if pbkdf2_sha256.verify(form_password, user_password):
                session['logged-in'] = True
                session['username'] = user['username']
                session['email'] = email
                return redirect(url_for('admin.management'))
            else:
                return redirect(url_for('admin.loginerror'))
        else:
            return redirect(url_for('admin.nologin'))


@admin.route('/loginerror')
def loginerror():
    """ Tells the user if there credentials are wrong."""
    return render_template('loginerror.html', page_title="Login Error")


@admin.route("/logout")
@check_logged_in
def logout():
    session.pop('logged-in', None)
    session.pop('username', None)
    session.pop('email', None)
    return redirect(url_for('admin.login'))


@admin.route("/nologin")
def nologin():
    """ This warns the user that they are not logged in """
    return render_template("nologin.html", page_title="NoLogin")


@admin.route("/management")
@check_logged_in
def management():
    documents = mongo.db.blog.count({})
    results = list(mongo.db.blog.find())
    return render_template("management.html", page_title="Management", 
                           username=session['username'], 
                           results=results,
                           numberofBlogs=documents)


@admin.route("/registeredusers")
@check_logged_in
def registeredusers():
    documents = mongo.db.users.count({})
    results = list(mongo.db.users.find())
    return render_template("users.html", page_title="Registered Users", 
                           username=session['username'], results=results,
                           docs=documents)


@admin.route('/delete_user/<user_id>')
@check_logged_in
def delete_user(user_id):

    """ Removes the relavent data from mongo using the id of the post"""

    mongo.db.users.delete_one({'_id': ObjectId(user_id)})
    return redirect(url_for('admin.registeredusers'))