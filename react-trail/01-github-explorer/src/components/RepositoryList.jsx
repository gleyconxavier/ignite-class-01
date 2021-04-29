import {RepositoryItem} from "./RepositoryItem";

const repository = {
  name: "Repositório em um objeto",
  description: "Podemos enviar uma serie de propriedades através de um objeto",
  link: "https://gleyconxavier.com"
}

export function RepositoryList() {
  return (
          <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              {/*
                For testing purposes let's check how React react (lmao)
                to different ways of passing through props to child components
              */}
              < RepositoryItem
                      name="linux-configs"
                      description="My wierd but working linux configs"
                      link="https://github.com/gleyconxavier/linux-configs"
              />
              < RepositoryItem repository={repository}/>
              < RepositoryItem name="unform4"/>
            </ul>
          </section>
  );
}
