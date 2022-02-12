import flask from "./components/pictures/flask.jpg"
import electron from "./components/pictures/electron.png"
import cifar from "./components/pictures/cifar10.png"

const project = [
  {
    "title":"Education Websites for students supplemental learning",
    "requirement":"Website, Have lessons with different levels, quiz to test the knowledge ",
    "backend":"The website is mainly done using Flask python framework for backend and use SQLite for storing persistent data", 
    "frontend":"The frontend is mainly based on HTML, CSS and JavaScript",
    "image":flask
  }, 
  {
    "title":"Unit Budget",
    "requirement":"Desktop Software, upload files, store all information into Database, get summary report and data visualization",
    "backend":"The website mainly done using Flask framework with SQLite to store Peristent data",
    "frontend":"using HTML, CSS, JavaScript with Electron JS to turn into the Desktop application",
    "image":electron
  },
  {
    "title":"Convolutional Neural Network",
    "requirement":"Using CIFAR-10 dataset, able to recognize the picture and make prediction",
    "description":"It done using Python Tensorflow with accuracy acound 80%",
    "image":cifar
  }
]



export default project