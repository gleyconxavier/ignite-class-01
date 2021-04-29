export function RepositoryItem(props) {
  return (
          <li>
            <strong>{props.repository?.name ?? props.name}</strong>
            <p>{props.repository?.description ?? props.description}</p>

            <a href={props.repository?.link ?? props.link} target="_blank">
              Acessar repositório
            </a>
          </li>
  )
}
