import ArticleCard from "../components/ArticleCard"

const data = [
    {
        id: 1,
        title: 'Title 1',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit architecto consequuntur pariatur magni, labore impedit, tenetur minus amet numquam dolore. Earum porro velit optio qui cupiditate obcaecati? Expedita, totam. \
        Consequatur deleniti modi reiciendis incidunt praesentium temporibus omnis nisi odit deserunt suscipit magni repellat sequi, veniam quaerat accusantium, facere est quibusdam? Saepe et eius excepturi cumque iure. Laboriosam, vel cupiditate?\
        Est voluptas error minus, atque adipisci alias. Nihil, ullam. Ipsam non animi eum consequuntur, perspiciatis maxime amet molestias minima nostrum accusamus soluta optio deleniti corrupti aut debitis! Voluptates, perspiciatis cupiditate?\
        Exercitationem repudiandae sunt molestias pariatur assumenda tempora, cumque recusandae facere ipsam corporis eveniet illum facilis dolore blanditiis quae, nulla vel ullam neque non. Nisi esse officiis, voluptate incidunt consequatur molestias?",
        created_at: '2021-09-01'
    },
    {
        id: 1,
        title: 'Title 1',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit architecto consequuntur pariatur magni, labore impedit, tenetur minus amet numquam dolore. Earum porro velit optio qui cupiditate obcaecati? Expedita, totam. \
        Consequatur deleniti modi reiciendis incidunt praesentium temporibus omnis nisi odit deserunt suscipit magni repellat sequi, veniam quaerat accusantium, facere est quibusdam? Saepe et eius excepturi cumque iure. Laboriosam, vel cupiditate?\
        Est voluptas error minus, atque adipisci alias. Nihil, ullam. Ipsam non animi eum consequuntur, perspiciatis maxime amet molestias minima nostrum accusamus soluta optio deleniti corrupti aut debitis! Voluptates, perspiciatis cupiditate?",
        created_at: '2021-09-01'
    },

]



const Home = () => {
  return (
    <>
        {data.map((article) => (
            <ArticleCard key={article.id} article={article} />
        ))}
    </>
  )
}

export default Home