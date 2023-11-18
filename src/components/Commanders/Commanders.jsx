import styled from "styled-components";
import pers1 from "../../images/persons/pers1.png"
import pers2 from "../../images/persons/pers2.png"
import pers3 from "../../images/persons/pers3.png"
import pers4 from "../../images/persons/pers4.png"
import pers5 from "../../images/persons/pers5.png"
import pers6 from "../../images/persons/pers11.png"
import pers7 from "../../images/persons/pers7.png"
import pers8 from "../../images/persons/pers8.png"
import pers9 from "../../images/persons/pers9.png"
import pers10 from "../../images/persons/pers10.png"
import Commander from "./Commander";


const Commanders = () =>{
    const peoples = [
        {avatar:pers1, name:'Коваленко Олександр Миколайович', rank:'Полковник', position:'Начальник 1 роти зв`язку', description:'Полковник Коваленко Олександр Миколайович відзначається високим професіоналізмом у керівництві 1 ротою зв\'язку. Він має значний досвід у плануванні та реалізації зв\'язкових операцій, забезпечуючи надійний зв\'язок між підрозділами."'},
        {avatar:pers2, name:'Шевченко Юрій Васильович', rank:'Майор', position:'Начальник МПЗ роти', description:'Майор Шевченко Юрій Васильович відповідає за підтримку матеріально-технічного забезпечення роти. Він володіє знаннями з логістики та управління запасами, забезпечуючи ефективне розподілення ресурсів.'},
        {avatar:pers3, name:'Петренко Максим Ігорович', rank:'Підполковник', position:'Начальник 3 роти зв`язку', description:'Підполковник Петренко Максим Ігорович керує 3 ротою зв\'язку, демонструючи виняткові лідерські якості та глибокі знання в області військового зв\'язку. Він відповідає за координацію комунікаційних операцій'},
        {avatar:pers4, name:'Бондаренко Василь Петрович', rank:'Старший лейтенант', position:'Курсовий офіцер 20 курсу', description:'Старший лейтенант Бондаренко Василь Петрович працює курсовим офіцером 20 курсу, де він відіграє ключову роль у підготовці молодших офіцерів. Він викладає тактику та стратегію, розвиваючи навички керівництва.'},
        {avatar:pers5, name:'Мельник Андрій Сергійович', rank:'Старший лейтенант', position:'Курсовий офіцер 20 курсу', description:'Старший лейтенант Мельник Андрій Сергійович, курсовий офіцер 20 курсу, відзначається своїм педагогічним підходом та здатністю мотивувати курсантів. Він зосереджений на розвитку лідерських якостей та професійних навичок.'},
        {avatar:pers6, name:'Лисенко Тарас Олександрович', rank:'Капітан', position:'Начальник 20 курсу', description:'Капітан Лисенко Тарас Олександрович як начальник 20 курсу відповідає за загальне керівництво навчальним процесом. Він забезпечує високий рівень підготовки курсантів, фокусуючись на сучасних військових стратегіях.'},
        {avatar:pers7, name:'Василенко Ігор Вікторович', rank:'Полковник', position:'Начальник 2 роти зв`язку', description:'Полковник Василенко Ігор Вікторович, керуючи 2 ротою зв\'язку, демонструє глибоке розуміння військового зв\'язку та інформаційних технологій. Він відіграє важливу роль у забезпеченні безперебійного зв\'язку.'},
        {avatar:pers8, name:'Іванчук Роман Юрійович', rank:'Майор', position:'Начальник ІТВ', description:'Майор Іванчук Роман Юрійович є ключовою фігурою у відділі інформаційно-технічного забезпечення. Він координує роботу з обслуговування та оновлення інформаційних систем, забезпечуючи їх ефективність та безпеку.'},
        {avatar:pers9, name:'Кравчук Віталій Дмитрович', rank:'Капітан', position:'Начальник складу ПММ', description:'Капітан Кравчук Віталій Дмитрович ефективно керує складом паливно-мастильних матеріалів, забезпечуючи належне управління запасами. Його робота критично важлива для підтримки операційних можливостей війська.'},
        {avatar:pers10, name:'Григоренко Дмитро Андрійович', rank:'Капітан', position:'Начальник РАО', description:'Капітан Григоренко Дмитро Андрійович, керуючи радіоактивним обслуговуванням, гарантує безпеку та ефективність управління радіоактивними матеріалами. Він відповідає за стратегічне планування та виконання завдань у цій критичній сфері.'},
    ]
    return(
        <div className={'container'}>
            <h1 id={'commanding'} style={{color:'white', textAlign:'center', padding:'20px 0'}}>Командування інституту</h1>
        <CommandersContainer>
            {peoples.map((people, index)=>(
                <Commander data={people} key={index}></Commander>
            ))}
        </CommandersContainer>
        </div>
    )
}

const CommandersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 700px);
  grid-template-rows: repeat(5, 400px);
  row-gap: 50px;
  background-color: black;
  padding: 0 50px;
  padding-bottom: 40px;
`

export default Commanders