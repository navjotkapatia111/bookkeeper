import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../../axios.js";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { toast } from "react-toastify";
import LoadingSpinner from "../ui/LoadingSpinner.jsx";
import Navbar from "./Navbar.jsx";
import { useTheme } from "../context/themecontext.jsx";

const Home = () => {
  const [bookform, setBookform] = useState({
    bookname: "",
    booktitle: "",
    author: "",
    sellingprice: "",
    publishdate: "",
    Id: "",
  });
  const [booklist, setBooklist] = useState([]);
  const [isupdate, setIsupdate] = useState(false);
  const {darkMode} = useTheme()

  const getList = async () => {
    try {
      const { data } = await BaseUrl.get("/booklist");
      setBooklist(data?.BookList);
      console.log("BookList", data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleformchange = (e) => {
    const { name, value } = e.target;
    setBookform((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isupdate) {
        if (
          !bookform.bookname ||
          !bookform.booktitle ||
          !bookform.author ||
          !bookform.sellingprice ||
          !bookform.publishdate
        ) {
          alert("All fields are required");
          return;
        }

        const { data } = await BaseUrl.post("/addbook", bookform);
        console.log("data..>>>", data);
        if (data?.Success || data?.success) {
          alert(data?.message);
          getList();
          setBookform({
            bookname: "",
            booktitle: "",
            author: "",
            sellingprice: "",
            publishdate: "",
            Id: "",
          });
        }
      } else {
        const { data } = await BaseUrl.put("/update", bookform);
        if (data?.Success || data?.success) {
          alert(data?.message);
          getList();
          setBookform({
            bookname: "",
            booktitle: "",
            author: "",
            sellingprice: "",
            publishdate: "",
            Id: "",
          });
          setIsupdate(false);
        }
      }
      toast.success("Submitted");
      getList();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await BaseUrl.post("/delete", {
        Id: id,
      });
    
      toast.success("Deleted")
      getList();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async (data) => {
    setBookform({
      bookname: data?.bookname,
      booktitle: data?.booktitle,
      author: data?.author,
      sellingprice: data?.sellingprice,
      publishdate: data?.publishdate,
      Id: data?._id,
    });
    setIsupdate(true);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <>
    <Navbar/>
    <nav className={`w-full shadow px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    }`} >
    <div className="w-full px-5 min-h-[calc(100vh-60px)]">
      <div className={"w-full grid grid-cols-5 gap-4 my-4"} >
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Name</label>
          <input
            type="text"
            placeholder="Book Name"
            className="w-full border border-gray-300 rounded-sm outline-none px-2"
            name="bookname"
            value={bookform.bookname}
            onChange={handleformchange}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Title</label>
          <input
            type="text"
            placeholder="Book Title"
            className="w-full border border-gray-300 rounded-sm outline-none px-2"
            name="booktitle"
            value={bookform.booktitle}
            onChange={handleformchange}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Author</label>
          <input
            type="text"
            placeholder="Author"
            className="w-full border border-gray-300 rounded-sm outline-none px-2"
            name="author"
            value={bookform.author}
            onChange={handleformchange}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Selling Price</label>
          <input
            type="text"
            placeholder="Selling Price"
            className="w-full border border-gray-300 rounded-sm outline-none px-2"
            name="sellingprice"
            value={bookform.sellingprice}
            onChange={handleformchange}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Publish Date</label>
          <input
            type="date"
            placeholder="Publish Date"
            className="w-full border border-gray-300 rounded-sm outline-none px-2"
            name="publishdate"
            value={bookform.publishdate}
            onChange={handleformchange}
          />
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button
          className="bg-gray-700 text-white h-9 w-22 rounded-md cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="w-full mt-10">
        <div className="w-full">
          <table className={`w-full divide-y
           ${darkMode ? "bg-gray-800 divide-gray-700 text-white" : 
           "bg-white divide-gray-200 text-gray-900"}`}>

            <thead className={`${ darkMode ? 
            "bg-gray-700 text-gray-200" : "bg-gray-50 text-gray-600" }`}>

              <tr>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Book Name
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Book Title
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Author
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Selling Price
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Publish Date
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className={`divide-y ${
              darkMode ? "bg-gray-800 divide-gray-700" : "bg-white divide-gray-200"}`}>

                {booklist.length===0 && <LoadingSpinner table/>}
              {booklist?.map((book, index) => {
                return (

                  <tr className={`${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} key={index}>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.bookname}{" "}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.booktitle}{" "}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.author}{" "}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.sellingprice}{" "}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.publishdate}{" "}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <div className="w-20 flex justify-center gap-5">
                        <div
                          className="h-8 w-8 flex justify-center items-center bg-red-100 text-red-600 cursor-pointer"
                          onClick={() => handleDelete(book._id)}
                        >
                          <span>
                            <MdDelete />
                          </span>
                        </div>
                        <div
                          className="h-8 w-8 flex justify-center items-center bg-green-100 text-green-600 cursor-pointer"
                          onClick={() => handleUpdate(book)}
                        >
                          <span>
                            <FaPen />
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </nav>
    </>
  );
};


export default Home;
