export function RepositoryItem(props) {
  return (
          <li>
            <strong>{props.repository?.name ?? props.name}</strong>
            <p>{props.repository?.description ?? props.description}</p>

            <a href={props.repository?.html_url ?? props.html_url} target="_blank">
              Acessar repositório
            </a>
          </li>
  )
}
