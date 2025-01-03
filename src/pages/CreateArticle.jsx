import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`Title: ${title}, Description: ${description}`);
    console.log(new Date().toISOString());

    if (!title || !description) {
      return; // On ne fait rien si les champs ne sont pas remplis
    }

    const newArticle = {
      title,
      description,
      created_at: new Date().toLocaleDateString()
    }

    // fetch('http://localhost:3000/articles', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title,
    //     description,
    //     created_at: new Date().toISOString
    //   })
    // })
    fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
    .then((response) => {
      navigate('/');
    })
  }
    return (
      <>

        <div className="font-bold text-sxl mb-6">
          <form onSubmit={(e) => {handleSubmit(e)}}>
            <div className="mb-4">
              <label>Post Title</label>
              <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                className="border-0 
                  outline-0 
                  p-2 
                  ring-1 
                ring-indigo-400 
                  rounded-lg 
                  w-full 
                  block 
                  mt-1 
                  focus:ring-2" />
            </div>

            <div className="mb-8">
              <label>Post Content</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-0 
                  outline-0 
                  p-2 
                  ring-1 
                ring-indigo-400 
                  rounded-lg 
                  w-full 
                  block mt-1 
                  focus:ring-2" >
              </textarea>
            </div>
            <button 
              className="
              bg-indigo-400 
              text-white 
                block 
                w-full 
                p-2 
                rounded-lg 
              hover:bg-indigo-600"
              >Create</button>
          </form>
        </div>
      </>
    );
  }