import os
from admin.admin import admin
from datetime import datetime
from flask import Flask, render_template, request, redirect, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from os import path
if path.exists("env.py"):
    import env

app = Flask(__name__)
app.register_blueprint(admin, url_prefix="/admin")

app.config['MONGO_DBNAME'] = os.getenv('MONGO_DBNAME')
app.config['MONGO_URI'] = os.getenv('MONGO_URI')
app.secret_key = os.getenv("SECRET_KEY")
mongo = PyMongo(app)

@app.route("/")
def home():
   results = list(mongo.db.blog.find())
   return render_template("home.html", page_title="Home", blogs=results)


@app.route("/create", methods=['GET','POST']) 
def create():

    if request.method == "GET":
        return render_template("create.html", page_title="Create")
    elif request.method == "POST":
        now = datetime.now()
        name = request.form['blog_name']
        title = request.form['blog_title']
        blog = request.form['blog_info']
        image = request.form['image_url']
        created = now.strftime("%d/%m/%Y %H:%M:%S")
        updated = now.strftime("%d/%m/%Y %H:%M:%S")
        mongo.db.blog.insert_one({
            'name': name,
            'title': title,
            'blog': blog,
            'image': image,
            'created': created,
            'updated': updated,

        })
        return redirect(url_for('home'))
    return render_template("create.html", page_title="Create")


@app.route("/edit_post/<post_id>", methods=['GET','POST']) 
def edit_post(post_id):

    """Edit post take the blog id interigates mongo pulls the info and
    displays it on the page, when the save button is pressed a post request 
    is sent to mogo up update the data."""

    if request.method == "GET":
        the_post = mongo.db.blog.find_one({'_id': ObjectId(post_id)})
        return render_template("edit.html", page_title="Edit", post=the_post)

    elif request.method == "POST":
        blog_post = mongo.db.blog
        now = datetime.now()
        blog_post.replace_one({'_id': ObjectId(post_id)},
                {
                'name': request.form['blog_name'],
                'title': request.form['blog_title'],
                'blog': request.form['blog_info'],
                'image': request.form['image_url'],
                'created': request.form['created'],
                'updated': now.strftime("%d/%m/%Y %H:%M:%S"),
                })
        return redirect(url_for('home'))



@app.route('/delete_post/<post_id>')
def delete_post(post_id):

    """ Removes the relavent data from mongo using the id of the post"""

    mongo.db.blog.delete_one({'_id': ObjectId(post_id)})
    return redirect(url_for('home'))


@app.route('/read_post/<post_id>') 
def read_post(post_id):
    read = mongo.db.blog.find_one({'_id': ObjectId(post_id)})
    return render_template("read.html", page_title="read", display=read)    


if __name__ == "__main__":
    app.run(host=os.environ.get('IP', '127.0.0.1'),
            port=int(os.environ.get('PORT', 5000)),
            debug=True) 