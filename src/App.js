import { useState, useEffect } from "react";
import "./App.styles.scss";
import SelectMenu from "./components/SelectMenu/SelectMenu.component";
import axios from "axios";
import { API_URL, API_KEY } from "./API";
import BookList from "./components/BookList/BookList.component";

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
      <div className="selector">
        <SelectMenu setSelection={setSelection} />
      </div>
      <div className="book-div">
        <BookList bookList={bookList} />
      </div>
    </div>
  );
}

export default App;
