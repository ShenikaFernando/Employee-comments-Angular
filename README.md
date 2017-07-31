Challenge Synopsis
==================

The challenge is to create a simple application able to consume existing REST APIs, re-organise the information and display the well-formatted output to the user using modern JS and asynchronous calls.

The idea of this test is to assess your code style and form, your skill in designing user interfaces, your knowledge of web technologies and AngularJS.

Bear in mind that we do not require that the final project works 100% reliably; instead we are more interested in how you get to the final work.

Prerequisites
=============

The application needs to be written in AngularJS. There are no pre-requisites but it might be useful to use Bower and Grunt for the dependencies and the repetitive tasks.

The Code Challenge description
==============================

We would like you to implement a simple AngularJS application, which will consume the APIs from [JSONPlaceholder](https://jsonplaceholder.typicode.com) and will be consisting of the following views:

1. Posts view
    - build an interface that will show all the posts sorted by title (pagination is not required)
    - every post must show the posting user's name and a link to send him/her an email
    - the viewing user must be able to expand the comments for a specific post

2. Posts by user view
    - build an interface that will show the posts for a selected posting user showing the latest on top (pagination is not required)
    - the viewing user must be able to select the posting users from a dropdown list
    - the view must accept a query parameter with the ID of the posting user and, if specified, pre-select the item in the dropdown list

You can use any CSS framework, AngularJS services, plugins, angular-seed boilerplate code or anything else you believe is helpful.

Design the interfaces as you see fit.

We would like to request that you provide a small development log on your process up to the final work. An easy way to do this is to start a new local GIT repository and commit every change you do to it.

Please attach all the required source code and instructions on how to run it.  Don’t forget to also send your `.git` folder inside your project __renamed to `git` (no dot)__ if you chose to use GIT.

Thanks and good luck!

Instructions for install and run the apllication
=======================

1. install https://rubyinstaller.org/ and install http://sass-lang.com/install

2. install npm latest version 

3. Please run  below commands;
	-  git init
	-  npm install gulp -g
	-  npm install gulp --save-dev
	-  npm install gulp-sass --save-dev
	-  gulp sass
	-  npm install -g http-server
	-  http-server -o