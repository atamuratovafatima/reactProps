import c from './Card.module.css'
import pilesos from './img/pilesos.jpg'
import muka from './img/muka.jpg'
import makaroni from './img/makaroni.jpg'
import utyug from './img/utyug.jpg'
import maslo from './img/maslo.jpg'


function Card(props){
    return(
        <div className={c.card}>
            <div className={c.card_image_container}>
                <img alt="img" src={props.img} />
            </div>
            <div className={c.card_description_maincontainer}>
                <div className={c.card_description_container}>
                    <p>{props.description}</p>
                </div>
                <div className={c.card_grade_container}>
                    <small>{props.grade}</small>
                </div>
                <div className={c.card_price_container}>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )
    
}

function Cards(){
    return(
        <div className={c.card_container}>
            <Card img={makaroni} description="Макаронные изделия Bottega del Sole, спирали, 400 г" grade="4.9" price="4000"/>
            <Card img={muka} description="Пшеничная мука MAKFA, высший сорт, 2 кг" grade="4.9" price="19000"/>
            <Card img={pilesos} description="Пылесос Bosch BGS05A220" grade="4.9" price="1 556 000"/>
            <Card img={utyug} description="Утюг Haley HY-233С" grade="4.3" price="203 000"/>
            <Card img={maslo} description="Подсолнечное масло Oila tanlovi, рафинированное и дезодорированное, 900 мл" grade="4.9" price="13 000"/>
            
            <Card img={makaroni} description="Макаронные изделия Bottega del Sole, спирали, 400 г" grade="4.9" price="4000"/>
            <Card img={muka} description="Пшеничная мука MAKFA, высший сорт, 2 кг" grade="4.9" price="19000"/>
            <Card img={pilesos} description="Пылесос Bosch BGS05A220" grade="4.9" price="1 556 000"/>
            <Card img={makaroni} description="Макаронные изделия Bottega del Sole, спирали, 400 г" grade="4.9" price="4000"/>
            <Card img={muka} description="Пшеничная мука MAKFA, высший сорт, 2 кг" grade="4.9" price="19000"/>
        </div>
    )
}


export default Cards;