import os
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", page_title="Home")


@app.route("/nextpage") 
def nextpage():
    return render_template("nextpage.html", page_title="Next Page")


@app.route("/gitpod") 
def gitpod():
    return render_template("gitpod.html", page_title="GitPod")


if __name__ == "__main__":
    app.run(host=os.environ.get('IP', '127.0.0.1'),
            port=int(os.environ.get('PORT', 5000)),
            debug=True) 
