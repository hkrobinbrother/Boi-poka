import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    // ideally we will directly get the read book list from the database

    useEffect(()=>{
        
        const sotoredReadList = getStoredReadList();
        const storedReadListInt = sotoredReadList.map(id => parseInt(id))

        // worst way

        console.log(sotoredReadList,storedReadListInt, allBooks);

        // 
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)
    }, []);
  return (
    <div>
      <h3 className="text3xl my-8">listed book</h3>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read: {readList.length}</h2>
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
