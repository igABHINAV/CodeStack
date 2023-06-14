import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';


import AuthContext from '../context/ConTexT'
import { useContext, useState, useEffect } from 'react'
import { useRef } from 'react';
const Home = () => {


  useEffect(() => {
    getnotes()
  }, [])

  const [note, setnote] = useState([])

  let { authTokens } = useContext(AuthContext)

  let getnotes = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/all/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    if (response.status === 200) {
      setnote(data)
    }
    else {
      alert('Something went  wrong !')
    }
  }

  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Home</h1><br />
      {note.map((items) => {
        return (
          <>

            <div className='container text-center' style={{ "width": "850px" }}>
              <div className="card mb-3 border-primary">
                <div className="card-body">
                  <h5 class="card-title"> {items.title}</h5>
                  <p className="card-text">{items.message}<br /></p>
                  <div>
                    <SyntaxHighlighter language="javascript" showLineNumbers>
                      {items.code_snippet}
                    </SyntaxHighlighter>
                    <CopyToClipboard text={items.code_snippet} onCopy={handleCopy}>
                      <button>{isCopied ? '✅' : '📋'}</button>
                    </CopyToClipboard>
                  </div>
                  <p className="card-text"><small className="text-muted">Last updated {items.time} </small></p>


                </div>
              </div>
            </div>


          </>

        )


      })}

    </div>
  )
}

export default Home
