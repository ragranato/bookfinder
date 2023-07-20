import { useState, useEffect } from "react";
import "./App.styles.scss";
import SelectMenu from "./components/SelectMenu/SelectMenu.component";
import axios from "axios";
import { API_URL, API_KEY } from "./API";
import BookList from "./components/BookList/BookList.component";
import NavBar from "./components/NavBar/NavBar.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  const [bookList, setBookList] = useState([]);
  const [selection, setSelection] = useState("");

  useEffect(() => {
    if (selection) {
      axios
        .get(
          `${API_URL}subject:${selection}&filter=free-ebooks&maxResults=20&langRestrict=en&key=${API_KEY}`
        )
        .then((response) => {
          const data = response.data;
          setBookList(data.items);
        })
        .catch((e) => console.log(e));
    }
  }, [selection]);

  // console.log(bookList)
  return (
    <div className="App">
      <NavBar />
      <div id="overlay"><img src="https://media.istockphoto.com/id/1413840933/photo/old-books-on-wooden-shelf-tiled-bookshelf-background-concept-on-the-theme-of-history.webp?b=1&s=170667a&w=0&k=20&c=1Npv4ypDzrRYfcKmz1FpolYgeLWC5ndy9VGcgC7Odvs="/></div>
      <div className="selector">
        <SelectMenu setSelection={setSelection} />
      </div>
      <div className="book-div">
        <BookList bookList={bookList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
