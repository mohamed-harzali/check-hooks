import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import MovieList from './components/MovieList';
import {Navbar, Form, FormControl, Nav} from 'react-bootstrap';
import Filter from './components/Filter';


function App() {
  const [keyword,setKeyword] = useState("")
  const [movies,setMovies] = useState([

    { id:1,
      titre : "Bat Man" , 
      description : "Marvel/American", 
      images :"https://fr.web.img3.acsta.net/medias/nmedia/18/83/56/27/20158098.jpg",
      rate:5
    },
    { id:2,
      titre : "Thor", 
      description :"Marvel/American", 
      images :"https://fr.web.img3.acsta.net/medias/nmedia/18/77/96/35/19701393.jpg",
      rate:5
    },
    { id:3,
      titre : "Iron Man", 
      description : "Marvel/American", 
      images : "https://fr.web.img3.acsta.net/medias/nmedia/18/62/89/45/18876909.jpg",
      rate:5
    },
    { id:4,
      titre : "Spider Man", 
      description :"Marvel/American", 
      images :"https://static2.tribute.ca/poster/660x980/spider-man-2-vf-156983.jpg",
      rate:4
    },
    { id:5,
      titre : "Aqua Man" , 
      description : "Marvel/American", 
      images :"https://fr.web.img6.acsta.net/pictures/18/07/18/16/01/4824123.jpg",
      rate:4
    },
    { id:6,
      titre : "Super Man" , 
      description : "Marvel/American", 
      images :"https://img.over-blog-kiwi.com/1/88/59/62/20191216/ob_9d1aca_1.jpg",
      rate:4
    },
    { id:7,
      titre : "Black PanTher" , 
      description : "Marvel/American", 
      images :"https://m.media-amazon.com/images/M/MV5BYzVhZDYzNzYtZTJhZi00ZDIzLTg2YmEtNGQyMmI1NzJlMmMyXkEyXkFqcGdeQXVyNzg0NTkwNTU@._V1_.jpg",
      rate:3
    },
    { id:7,
      titre : "WonDer WoMan" , 
      description : "Marvel/American", 
      images :"https://www.ecranlarge.com/uploads/image/000/988/wonder-woman-affiche-988841.jpg",
      rate:3
    },
    { id:7,
      titre : "FlaSh" , 
      description : "Marvel/American", 
      images :"https://fr.web.img2.acsta.net/r_1280_720/pictures/17/11/15/11/29/0827643.jpg",
      rate:3
    },

  ]);

  const search=(e) => {setKeyword (e.target.value)}
  const [keyRate, setKeyRate] = useState(0)
  const addMovie = (nMovie) => {setMovies(movies.concat(nMovie))}

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange= { search } />
          <Filter setKeyRate={setKeyRate}/>
        </Form>
      </Navbar>
      <MovieList movies={movies.filter ((el) => el.titre.toUpperCase().trim().includes (keyword.toUpperCase().trim()) && el.rate >= keyRate) } addMovie={addMovie}/> 
   </div>

  );
}

export default App;
