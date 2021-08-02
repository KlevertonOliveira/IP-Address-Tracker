# IP Address Tracker (English / Português)
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/KlevertonOliveira/IP-Address-Tracker/blob/master/LICENSE)

---

## :art: Layout web
![Alt Text](project-preview/ip-address-tracker.gif)


---

[Project Presentation](https://ip-address-tracker-klevertonoliveira.netlify.app/) /
[Apresentação do Projeto](https://ip-address-tracker-klevertonoliveira.netlify.app/)

---

## :mag_right: About the project / Sobre o projeto

IP Address Tracker is an application developed as a solution to the [challenge](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) of the same name, which was proposed by the [Frontend Mentor](https://www.frontendmentor.io/challenges) website. As a differential for the development of this application, I chose to use the React JS library together with SASS (CSS3 extension) in order to make the development process more practical, agile and responsive.

The application implements a system that uses a search field to receive input from an IP address or a domain and, from that, returns to the user some information (such as ip, coordinates, time zone, etc.) referring to the given address, which are obtained through the IP Geolocation API provided by the [Ipify](https://geo.ipify.org/) website.

Finally, from the coordinates obtained previously, the application uses the [Leaflet](https://leafletjs.com/) library, in conjunction with [React Leaflet](https://react-leaflet.js.org/), to show the user a map of the location where the given address and its surroundings are located.

The project was implemented respecting the responsive interface development model called "Mobile First", where initially the layout for mobile devices is created. Afterwards, the structure created is adapted to the desktop model. In the case of this application, the development of the mobile interface was started considering the screen size of 375px and going up to 1440px, where it reaches the desktop model, as these were the reference values provided by the creators of the design of this challenge (however, the breakpoint which makes the division between the layouts is set at 768px). Therefore, the application is fully responsive, adapting to devices with different screen sizes.


---

IP Address Tracker é uma aplicação desenvolvida como solução ao [desafio](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) de mesmo nome, o qual foi proposto pelo site [Frontend Mentor](https://www.frontendmentor.io/challenges). Como diferencial para o desenvolvimento deste aplicativo, optei por utilizar a biblioteca React JS juntamente com a SASS (extensão do CSS3) com o objetivo de tornar o processo de desenvolvimento mais prático, ágil e responsivo.

A aplicação implementa um sistema que utiliza um campo de buscas para receber o input de um endereço IP ou de um domínio e, a partir disso, retorna ao usuário algumas informações (como ip, coordenadas, fuso horário, etc) referentes ao endereço fornecido, as quais são obtidas através da API de Geolocalização por IP disponibilizada pelo website [Ipify](https://geo.ipify.org/). 

Por fim, a partir dos dados de coordenadas obtidos anteriormente, a aplicação utiliza a biblioteca [Leaflet](https://leafletjs.com/), em união com [React Leaflet](https://react-leaflet.js.org/), para exibir ao usuário um mapa do local onde fica localizado o endereço fornecido e suas adjacências.

O projeto foi implementado respeitando o modelo de desenvolvimento de interfaces responsivas denominado "Mobile First", onde inicialmente é criado o layout para dispositivos móveis. Posteriormente, a estrutura criada é adaptada para o modelo desktop. No caso desta aplicação, o desenvolvimento da interface mobile foi iniciado considerando o tamanho de tela de 375px e indo até 1440px, onde alcança o modelo desktop, pois estes foram os valores de referência fornecidos pelos criadores do design deste desafio (no entanto, o breakpoint que faz a divisão entre os layouts é estabelecido em 768px). Assim sendo, a aplicação é totalmente responsiva, adaptando-se a aparelhos com tamanhos de tela variados.

---

## :gear: Technologies Used / Tecnologias utilizadas

### Front end
- HTML5
- [SASS](https://sass-lang.com/) (CSS3 Extension)
- [Typescript](https://www.typescriptlang.org/) (Superset of JavaScript)
- [React JS](https://reactjs.org/) (Javascript Library)
- [Leaflet](https://leafletjs.com/) Library
- [React Leaflet](https://react-leaflet.js.org/)
- [Netlify](https://www.netlify.com/)

## :file_folder: How to run the project / Como executar o projeto

Prerequisites / Pré-requisitos: npm / yarn

```bash
# Clone repository / Clonar repositório
git clone https://github.com/KlevertonOliveira/IP-Address-Tracker.git

# Enter the project folder / Entrar na pasta do projeto
cd IP-Address-Tracker

# Install dependencies / Instalar dependências
yarn install 
or 
npm install

# Run the project / Executar o projeto
yarn start 
or
npm start
```

## :raising_hand_man: Author / Autor

José Kleverton Yvens Oliveira

https://www.linkedin.com/in/kleverton-oliveira/
