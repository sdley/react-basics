import { useEffect, useState } from "react"
import ArticleCard from "../components/ArticleCard"



const Home = () => {

    const handleDelete = (id) => {
        // filtrer les articles pour ne garder que ceux dont l'id est différent de celui passé en paramètre
        const newArticles = articles.filter(article => article.id !== id);
        setArticles(newArticles);
        // on supprime maintenant l'article du serveur
        fetch(`http://localhost:3000/articles/${id}`, {
          method: 'DELETE'
        })
    }
    // second methode
    // eslint-disable-next-line no-unused-vars
    const handleDelete2 = (id) => {
        // console.log(`Deleting article with id: ${id}`);
        fetch(`http://localhost:3000/articles/${id}`, {
          method: 'DELETE'
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('An error occured');
          }
          // On supprime l'article du DOM
            const newArticles = articles.filter(article => article.id !== id);
            setArticles(newArticles);
        })
        .catch(error => {
          console.error(error);
        });
      }

    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(data => {
            setArticles(data);
            setError(null);
        })
        .catch(error => {
            setError(error.message);
            // Dans le cas ou il y a un permier chargement reussi et qu'en suite une erreur survienne
            // On evite d'afficher erreur et articles deja chargés
            setArticles([]);
        });
    }, []);

  return (
    <>
        {/* {
            articles.length === 0 
            ? <p className="text-2xl text-center mt-10">Loading...</p>
            : null 
        } */}


        {articles.length === 0 && !error && <p className="text-2xl text-center mt-10">Loading...</p>}

        {
            error && <p className="text-2xl text-center mt-10 text-red-500">{error}</p>
        }

        {articles.map((article) => (
            <ArticleCard key={article.id} article={article} handleDelete={handleDelete} />
        ))}
    </>
  )
}

export default Home