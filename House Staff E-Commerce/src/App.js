import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Slider from "./components/Slider";
import Items from "./components/Items";
import Guarantee from "./components/Guarantee";
import Announcement from "./components/Announcement";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [
        {
          id: "chair-grey-scana",
          title: 'Стілець сірий',
          img: 'https://i5.walmartimages.com/asr/e71514f2-e250-4027-94c5-f8159cfa0477_1.e29588b8edc7f302db76f92b7fee4abe.jpeg',
          desc: 'Темно-коричневий каркас з масиву деревини вкрито морилкою та лаком, щоб підкреслити природну текстуру деревини.',
          category: 'Стілець',
          prices: [ 
            {'currency': '$', amount: '49.99 '},
            {'currency': '£', amount: '39.78'} 
          ],
          attributes: {color: ['#ffffff', '#939393'], height: ["1.1m", "1.3m"]}
        },
        {
          id: "table-scana",
          title: 'Стіл',
          img: 'https://ii1.pepperfry.com/media/catalog/product/f/o/800x880/foldable-table-in-natural-colour-by-clasicraft-foldable-table-in-natural-colour-by-clasicraft-ahmtub.jpg',
          desc: 'Лаконічний та простий дизайн підходить до будь-якого стилю. Можна поєднати з іншими письмовими столами або тумбами MICKE МІККЕ серії.',
          category: 'Стіл',
          prices: [ 
            {'currency': '$', amount: '149.99'},
            {'currency': '£', amount: '119.35'} 
          ],
          attributes: {color: ['#ffffff', '#AE9E55', '#250F47', '#473C0F'], height: ["0.7m", "1m"]}
        },
        {
          id: "sofa-scana",
          title: 'Диван',
          img: 'https://pyxis.nymag.com/v1/imgs/41a/37d/6bb7d0ba96a11b066a48080ee63378f3db-Sofa-Sofa-Desktop-Masthead-02.2x.rsocial.w600.jpg',
          desc: 'GLOSTAD ГЛОСТАД диван легко придбати, доставити додому та скласти. Насолоджуйтеся відпочинком із родиною та друзями на повну.',
          category: 'Диван',
          prices: [ 
            {'currency': '$', amount: '329.99'},
            {'currency': '£', amount: '262.57'} 
          ],
          attributes: {color: ['#ffffff', '#1B8CA9', '#623D21']}
        },
        {
          id: "lamp-white-scana",
          title: 'Лампа',
          img: 'https://www.ikea.com/gb/en/images/products/myrhult-lamp-shade-white__0789157_pe763849_s5.jpg?f=s',
          desc: 'Для виразного дизайну легко знайти місце. Він прикрасить будь-який темний куток вашої оселі.',
          category: 'Лампа',
          prices: [ 
            {'currency': '$', amount: '19.99'},
            {'currency': '£', amount: '15.91'} 
          ],
          attributes: {color: ['#1E1D1C', '#C28C51', '#623D21'], light: ["м'яке біле світло", "звичайна лампка"]}
        },
        {
          id: "chair-white-scana",
          title: 'Стілець білий',
          img: 'https://www.ikea.com/gb/en/images/products/ingolf-chair-white-hallarp-beige__0926877_pe789566_s5.jpg?f=xxs',
          desc: 'Підійде до багатьох стилів, а якщо вам потрібен додатковий комфорт, просто додайте подушку на стілець.',
          category: 'Chairs',
          prices: [ 
            {'currency': '$', amount: '49.99'},
            {'currency': '£', amount: '39.78'} 
          ],
          attributes: {color: ['#ffffff', '#939393']}
        },
        {
          id: "table-white-scana",
          title: 'Стіл білий',
          img: 'https://www.decornation.in/wp-content/uploads/2020/01/designer-home-writing-desk.jpg',
          desc: 'Стіл добре поєднується з іншими меблями. Паперовий наповнювач у формі стільників додає столу міцності та легкості, тому його легко пересувати за потреби.',
          category: 'Стіл',
          prices: [ 
            {'currency': '$', amount: '79.99'},
            {'currency': '£', amount: '63.65'} 
          ],
          attributes: {color: ['#ffffff', '#939393']}
        }
      ],
      categoryItems: [
      { 
        id: "category-living-room",
        title: 'для ВІТАЛЬНІ',
        img: 'https://img.mebelok.com/image/data/Cube44/horizon/stellazh-horizon-r-2/cube44-stellazh-horizon-r-2-4.JPG',
        desc: ' - дизайнерські рішення',
        link: 'ДОКЛАДНІШЕ'
      },
      { 
        id: "category-dining-room",
        title: 'для ЇДАЛЬНІ',
        img: 'https://remdesign.info/wp-content/uploads/2018/08/dizajnerskie-stulya-dlya-kuhni-5.jpg',
        desc: ' - стильні варіанти',
        link: 'ДОКЛАДНІШЕ'
      },
      { 
        id: "category-sleeping-room",
        title: 'для СПАЛЬНІ',
        img: 'https://woodsoft.com.ua/assets/images/2e/2e9a36_bristol1.jpg',
        desc: ' - сучаснтй дизайн',
        link: 'ДОКЛАДНІШЕ'
      }
      ],
      sliderItems: [
        {
          id: "first-slide",
          title: "Найкращі дизайнерські меблі",
          img: "https://img.mebelok.com/image/data/Cube44/horizon/stellazh-horizon-r-2/cube44-stellazh-horizon-r-2-4.JPG",
          desc: "для вас і вашої оселі",
          link: "ДОКЛАДНІШЕ"
        },
        {
          id: "second-slide",
          title: "Нові надходження!",
          img: "https://bigkyiv.com.ua/wp-content/uploads/2020/09/1-2.jpg",
          desc: "пропозиції саме для вас!",
          link: "ДОКЛАДНІШЕ"
        },
        {
          id: "third-slide",
          title: "Купуйте разом із House Staff!",
          img: "https://masiv.ua/img/upload-files/slider/1.jpg",
          desc: "комплексний підхід до наших клієнтів",
          link: "ДОКЛАДНІШЕ"
        }
      ],
      cartOpen: false,
      orders: []
    }
  }

  getCartState = (state) => { 
    this.setState({cartOpen: state})
  }

  addToOrder = (item) => {
    this.setState(({orders}) => ({
      orders: [...orders,item]
    }))
  }

  render() {
    return (
      <div className="wrapper"> 
        <Header 
          getCartState={this.getCartState} 
          orders={this.state.orders}
        />

        <div className={this.state.cartOpen === true ? "backdropPage" : null}>
          <Categories categoryItems={this.state.categoryItems}/>
          <Slider sliderItems={this.state.sliderItems}/>
          <Items items={this.state.items} onAdd={this.addToOrder}/>
          <Announcement/>
          <Guarantee/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
