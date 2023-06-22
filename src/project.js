import flask from "./components/pictures/flask.jpg"
import electron from "./components/pictures/electron.png"
import cifar from "./components/pictures/cifar10.png"
import django from "./components/pictures/django.jpg"

const project = [
  {
    "title":"Education Websites for students supplemental learning",
    "requirement":"Website, Have lessons with different levels, quiz to test the knowledge ",
    "backend":"The website is mainly done using Flask python framework for backend and use SQLite for storing persistent data", 
    "frontend":"The frontend is mainly based on HTML, CSS and JavaScript",
    "source_code":"https://github.com/Sameam/Project2",
    "image":flask
  }, 
  {
    "title":"Unit Budget",
    "requirement":"Desktop Software, upload files, store all information into Database, get summary report and data visualization",
    "backend":"The website mainly done using Flask framework with SQLite to store Peristent data",
    "frontend":"using HTML, CSS, JavaScript with Electron JS to turn into the Desktop application",
    "source_code":"https://github.com/WentworthJin/Unit_Budget_Planner",
    "image":electron
  },
  {
    "title":"Ecommerce Platform",
    "requirement":"Ecommerce Website that will allow user to upload their products, category, picture and display to user",
    "backend":"The website mainly done using Django framework with SQLite to store Peristent data",
    "frontend":"using ReactJS framework, with React-boostrap for styling",
    "upcoming":"There is still some features to be add on such as payment, and fully integrated with django admin. At the moment, django admin is not fully integrated with the websites.",
    "source_code":"https://github.com/Sameam/ecommerce",
    "image":django
  },
  {
    "title":"Simple Machine Learning Project",
    "requirement":"This project is mainly a simple web interface that will take user input and make prediction. The dataset that used in this project includes: dry_bean dataset and CIFAR-10 dataset.",
    "description":"The machine learning part is done using python Sklearn and Tensorflow to produce an image recognition. The web interface is done using React and backend is done using Flask server.",
    "upcoming":"The project is still an ongoing project. The Tensorflow server and web application for image upload and recognition is not finished yet. However, the dry bean prediction is 90% done. ",
    "source_code":"https://github.com/Sameam/machine_learning",
    "image":cifar
  }
]


export default project