import os
from flask import Flask, render_template, request
from os import path
if path.exists("env.py"):
    import env

app = Flask(__name__)


app.secret_key = os.getenv("GITHUB_SECRET_KEY")


@app.route("/")
def index():
    page = 'home'
    return render_template("index.html", page_title="Home", pagename=page)


@app.route("/resume") 
def resume():
    return render_template("resume.html", page_title="Resume")


@app.route("/github") 
def github():
    return render_template("github.html", page_title="GitHub")
##, background='bg-image-github'

@app.route("/hobbies") 
def hobbies():
    return render_template("hobbies.html", page_title="Hobbies")


@app.route("/contact") 
def contact():
    return render_template("contact.html", page_title="Contact")


@app.errorhandler(404)
def page_not_found(error):
   return render_template('404.html', page_title = '404')


if __name__ == "__main__":
    app.run(host=os.environ.get('IP', '127.0.0.1'),
            port=int(os.environ.get('PORT', 5000)),
            debug=True) 
