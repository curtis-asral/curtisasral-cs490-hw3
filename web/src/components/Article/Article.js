import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
          <span className="ml-2 text-gray-400 font-normal">
            by {article.user.name}
          </span>
        </h2>
      </header>

      <div className="mt-2 text-gray-900 font-light">{article.body}</div>
    </article>
  )
}

export default Article