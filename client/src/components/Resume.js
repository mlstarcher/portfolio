import React, { useState } from 'react'
// import { Document } from 'react-pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="container pt-5">
      <div className="row pt-1">
        <a href="https://msportfoliocontent.s3-us-west-1.amazonaws.com/Matthew+Starcher+Resume+2021.pdf" target="_blank">
          <img className="img-fluid" src="https://msportfoliocontent.s3-us-west-1.amazonaws.com/Matthew+Starcher+Resume+img.jpg" alt="Image of resume, click for pdf"></img>
        </a>
      </div>
    </div>
  );
}


