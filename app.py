import os
from admin.admin import admin
from blog.blog import blog
from flask import Flask, render_template, request, session, redirect, url_for
from functools import wraps
from flask_pymongo import PyMongo
from passlib.hash import pbkdf2_sha256 # Hashing algorithm for Passlib 
from os import path
if path.exists("env.py"):
    import env

app = Flask(__name__)
app.register_blueprint(admin, url_prefix="/admin")
app.register_blueprint(blog, url_prefix="/blog")

app.config['MONGO_DBNAME'] = os.getenv('MONGO_DBNAME')
app.config['MONGO_URI'] = os.getenv('MONGO_URI')
app.secret_key = os.getenv("SECRET_KEY")
mongo = PyMongo(app)


#------------------------- Standard site wide routing --------------------------

@app.route("/")
def index():
    return render_template("index.html", page_title="Home")


@app.route("/resume") 
def resume():
    return render_template("resume.html", page_title="Resume")


@app.route("/github") 
def github():
    return render_template("github.html", page_title="GitHub")


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
