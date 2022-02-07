import React, { useState } from "react";
import axios from "axios";
import malala from "../doc/I_Am_Malala.jpg";

const Post = () => {
  const [links, setLink] = useState("");
  async function fetchPdf() {
    const data = await axios.get("/download/pdf", {
      headers: {
        "Content-type": "application/pdf",
      },
    });
  }

  async function generateRandomLink() {
    const data = await axios.post("/generateLink", {
      link: window.location.href,
    });
    setLink(data.data);
  }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href + links);
    alert("Link Copied");
  }

  return (
    <main className="main-page">
      <div className="book">
        <img src={malala} />
        <div className="detail">
          <table>
            <tbody>
              <tr>
                <td className="bold">Name: </td>
                <td>
                  I Am Malala: The Girl Who Stood Up for Education and Was Short
                  by the Taliban Hardcover – October 1, 2013
                </td>
              </tr>
              <tr>
                <td className="bold">Author: </td>
                <td>Malala Yousafzai</td>
              </tr>
            </tbody>
          </table>
          <div className="book-btn">
            <button onClick={fetchPdf}>Download</button>
            <button onClick={generateRandomLink}>Generate Link</button>
          </div>
          <div>
            <a className="link">{links}</a>
            <button onClick={copyLink}>Copy</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
