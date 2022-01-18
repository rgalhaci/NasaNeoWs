import './styles.css'
import logo from '../../assets/olos_logo.png'
import asteroides from "../../assets/asteroides_meteoritos.png"
import asteroide from "../../assets/asteroide.png"

function Atmosfera(){
    return(
        <div>
        <header>
        
            <div class="caixa">
            <h1>    
                <img src={logo}/>
            </h1>
        
        <nav>	
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="asteroides.html">Asteróides</a></li>
            </ul>
        </nav>
    </div>

    </header>

    <img class="asteroide" src={asteroide}/>
        <div class="style">
        <h2 class="titulo-principal">Asteróides</h2>

        

        <p> Os asteroides são corpos rochosos de estrutura metálica que orbitam em torno do sol como os planetas, mas que possuem uma massa muito pequena em comparação a eles. Seu diâmetro pode alcançar centenas de quilômetros, mas também pode ser de alguns poucos metros. Não costumam ter uma forma definida, apresentando as mais diversas aparências.</p>

        <p> Existem duas teorias que apontam o seu surgimento e formação. A primeira – mais aceita pela comunidade científica – afirma que os asteroides se formaram a partir da explosão que deu origem ao nosso sistema solar e que não se fundiram a nenhuma massa de nenhum planeta. A segunda afirma que eles se formaram a partir de restos e detritos de planetas ou parte deles, resultantes da colisão entre dois corpos celestes.</p>

        <p> Os asteroides foram descobertos após Johann Titus e Johann Bode determinarem a possibilidade matemática de haver um planeta orbitando em torno do sol entre Marte e Júpiter. Em 1801, Giuseppi Piazzi descobriu um corpo nessa região, ao qual foi dado o nome de Ceres. Entretanto, sua massa era menor e suas formas eram bem diferentes dos planetas comuns. Mais tarde, outros corpos semelhantes em tamanho menor foram descobertos na região próxima a Ceres e aeles foram dados o nome de asteroides.</p>

        <h3><strong><em>Classificação dos asteróides</em></strong></h3>

        <p> Existem diversos tipos de asteroides. Dentre eles, destacam-se os tipos C, S e M.</p>

        <p> Os do tipo <strong>C</strong> compõem dois terços dos asteroides conhecidos pelo homem até hoje. Caracterizam-se pela cor escura e sua baixa reflexividade da luz solar.</p>

        <p> Os do tipo <strong>S</strong> são mais claros e refletem melhor a luz do sol, o que caracteriza a sua luminosidade.</p>

        <p> Os do tipo <strong>M</strong> são compostos de níquel-ferro e são os que mais refletem a luz solar.</p>
        
        </div>
            
        <footer>
            <img src={logo}/>
            <p class="copyright">&copy; Copyright Olos Tecnologia e Sistemas - 2021</p>
        </footer> </div>
    )
}
export default Atmosfera