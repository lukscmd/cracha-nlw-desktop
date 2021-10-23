const linkSocialMidia = {
  github: 'lukscmd',
  youtube: 'lucknautico1',
  instagram: 'luksbarbosa',
  facebook: 'Luks.Silva.Barbosa',
  twitter: 'lucas_prompt'
}

function modifySocialMediaLinks() {
  // (For) específico no javascript. Cria variável let para receber os valores de elementos que são filhos
  // de um determinado elemento com ID/"PAI". Acesso ao PAI/"ID" através do DOM apenas informando o nome do ID e Utiliza-se o comando .children para identificar os elementos filhos.
  //Utiliza o comando .getAttibute para acessar os elementos filhos que estão sendo identificados por class.
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linkSocialMidia[social]}` //Nessa substituição só foi possível ocorrer devido aos nomes das propriedades do objeto serem os mesmos nomes das classes do li. Nesse caso ao passar o valor [social] o mesmo está indo verificar no objeto se existe alguma propriedade com o seu valor atual, se encontrar atribui um novo valor para social.
  }
}

modifySocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMidia.github}`

  // fetch é responsável por ir no local indicado pegar uma resposta.
  // then(faça) é o conceito de "promises", que vai receber a resposta obtida no fetch, caso ocorra tudo normal, jogando dentro da variavel "response" e vai realizar uma ação.
  // ( => ) é o conceito de "arrow function", que é uma escrita comprimida para declarar uma função. quando se tem apenas uma ação dentro da arrow function não precisa das "{}". A 1ª arrow function está pegando os valores de "response" e transformando em "JSON". A 2ª arrow function está pegando todos os dados transformados em "JSON" e armazenando na variável "data" que é o JSON em si. Após ter todas as informações em JSON, basta acessar ao DOM no html e realizar as substituições.
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userGitHub.textContent = data.login
    })
}

getGitHubProfileInfos()
