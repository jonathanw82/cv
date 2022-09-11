from flask import Flask, Blueprint, render_template, request, url_for, redirect, session
from functools import wraps
from datetime import datetime
from admin.admin import check_logged_in
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import os
from os import path
if path.exists("env.py"):
    import env


blog = Blueprint("blog", __name__, static_folder="static", template_folder="templates")


app = Flask(__name__)
app.config['MONGO_DBNAME'] = os.getenv('MONGO_DBNAME')
app.config['MONGO_URI'] = os.getenv('MONGO_URI')
app.secret_key = os.getenv("SECRET_KEY")
mongo = PyMongo(app)


@blog.route("/")
def home():
    blogs = mongo.db.blog.count({})
    results = list(mongo.db.blog.find())
    return render_template("home.html", page_title="Blog Home", 
                          blogs=results,
                          numberofBlogs=blogs)


@blog.route("/create", methods=['GET','POST']) 
@check_logged_in
def create():

    if request.method == "GET":
        return render_template("create.html", page_title="Create")
    elif request.method == "POST":
        now = datetime.now()
        title = request.form['blog_title']
        blog = request.form['blog_info']
        image = request.form['image_url']
        created = now.strftime("%d/%m/%Y %H:%M:%S")
        updated = now.strftime("%d/%m/%Y %H:%M:%S")
        mongo.db.blog.insert_one({
            'title': title,
            'blog': blog,
            'image': image,
            'created': created,
            'updated': updated,
        })
        return redirect(url_for('blog.home'))
    return render_template("create.html", page_title="Create Blog")


@blog.route("/edit_post/<post_id>", methods=['GET','POST']) 
@check_logged_in
def edit_post(post_id):

    """Edit post take the blog id interigates mongo pulls the info and
    displays it on the page, when the save button is pressed a post request 
    is sent to mogo up update the data."""

    if request.method == "GET":
        the_post = mongo.db.blog.find_one({'_id': ObjectId(post_id)})
        return render_template("edit.html", page_title="Edit Blog", post=the_post)

    elif request.method == "POST":
        blog_post = mongo.db.blog
        now = datetime.now()
        blog_post.replace_one({'_id': ObjectId(post_id)},
                {
                'title': request.form['blog_title'],
                'blog': request.form['blog_info'],
                'image': request.form['image_url'],
                'created': request.form['created'],
                'updated': now.strftime("%d/%m/%Y %H:%M:%S"),
                })
        return redirect(url_for('blog.home'))


@blog.route('/delete_post/<post_id>')
@check_logged_in
def delete_post(post_id):
    """ Removes the relavent data from mongo using the id of the post"""
    mongo.db.blog.delete_one({'_id': ObjectId(post_id)})
    return redirect(url_for('admin.management'))


@blog.route('/read_post/<post_id>') 
def read_post(post_id):
    read = mongo.db.blog.find_one({'_id': ObjectId(post_id)})
    return render_template("read.html", page_title="read", display=read)    
