import './styles.css'
import logo from '../../assets/olos_logo.png'
import atmosferaTerra from '../../assets/Atmosfera_da_terra.jpg'
import protecao from '../../assets/protecao.jpg'
import Camadas from '../../assets/Camadas.jpeg'
import { Link } from 'react-router-dom'

<title>Asteróides</title>

function Home() {
    return (
        <>
            <div className="App">
                <header>
                    <div className="caixa">
                        <h1>
                            <img src={logo} />
                        </h1>

                        <nav>
                            <ul>
                                <li><Link href="index.html">Home</Link></li>
                                <li><Link to="/Atmosfera">Asteróides</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <img className="atmosfera" src={atmosferaTerra} />
                  
               
              <div class="container_space">
              <h2 className="titulo-principal">
                    Proteção do nosso grande Lar - A TERRA
                </h2>
                    <p> As cinco camadas da atmosfera:{' '}<strong>troposfera, estratosfera, mesosfera, termosfera e
                        exosfera</strong>.</p>
                <p id="missao">
                    <em>
                        Sua missão:{' '}
                        <strong>
                            "Cada camada gasosa que envolve a Terra são
                            responsáveis, por manter o equilíbrio térmico do
                            planeta, proteger o impacto de meteoros e filtrar os
                            raios ultravioletas".
                        </strong>
                    </em>
                </p>
              <div class="container">
                <img class="camDivisao" src={Camadas}/>
                
                <p> 1- O Planeta Terra é um grupo de milhões de estruturas de organismos vivos que detém o poder de preservação da vida. A Terra se formou a cerca de 4,5 bilhões de anos atrás, se localiza em meio à Via Láctea, sendo o terceiro planeta mais próximo do Sol e o quinto maior entre todos os planetas que compõem o Sistema Solar</p>
                <p> Suas camadas são: 2- Faixa da vida: <strong>Troposfera.</strong> Sua
                    altitude de 0Km a 18Km, com temperaturas nas suas partes
                    mais altas de até -60°C.Concentra as maiores quantidades de
                    gases indispensáveis para os seres vivos: 78% de nitrogênio,
                    21% de oxigênio e 1% de gás carbônico.Nela, ocorrem os
                    fenômenos meteorológicos, como chuvas e ventos.Onde
                    transitam aviões e helicópteros
                </p>
                <p> 3- Filtro Solar Natural: <strong>Estratosfera.</strong> Sua
                    altitude de 18km a 50km, podendo chegar a temperaturas de
                    -60°C a -80°C.A chamamos de camada de ozônio, que filtra a
                    radiação ultravioleta emitida pelo Sol{' '}
                </p>
                <p> 4- Película Protetora: <strong>Mesosfera.</strong> Sua
                    altitude de 50km a 80km, com sua temperatura de -10°C a
                    -100°C protege a Terra de meteoros que caem a uma velocidade
                    de 65 mil Km/h, porem explodem ao encontrarem o atrito dessa
                    fatia, devido a sua baixa temperatura.
                </p>
                <div class="image_protect">
                    <img className="camadas" src={protecao} />

                    <p> 5- Caminho para o Sol: <strong>Termosfera.</strong> Sua
                        altitude de 80km a 300km, e ao contrario das demais
                        temperatura aqui chegamos a 1000°C Nessa camada o ar já
                        é muito rarefeito.É aqui que o vento solar é
                        interceptado pelo magnetismo da Terra e direcionado para
                        os polos, o que forma a aurora boreal.É também onde fica
                        a ionosfera, faixa carregada de íons e que recebe e
                        transmite as frequências do rádio.
                    </p>
                </div>

                <p> 6- Lacre Espacial: <strong>Exosfera.</strong> Sua altitude
                    de 300km a 600km, é a transição entre a atmosfera e o
                    espaço, por isso, vai terminando gradualmente até virar só
                    espaço sideral!Nessa camada ficam os satélites espaciais que
                    orbitam a Terra.Como o ar é extremamente rarefeito, a
                    temperatura chega a 1.000 oC.Mas não se assuste: devido à
                    rarefação, o calor não se propaga.
                </p>
            </div>
            </div>
            </div>
            <footer>
                <img src={logo} />
                <p class="copyright">
                    &copy; Copyright Olos Tecnologia e Sistemas - 2021
                </p>
            </footer>
        </>
    )
}

export default Home
