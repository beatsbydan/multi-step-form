import arcImg from '../../assets/images/icon-arcade.svg'
import advImg from '../../assets/images/icon-advanced.svg'
import proImg from '../../assets/images/icon-pro.svg'
const Packages = [
    {   
        id: '0',
        package:'arcade',
        img:arcImg,
        name:'Arcade',
        perMonth:9,
        perYear:90,
        discount:'2 months free'
    },
    {
        id:'1',
        package:'advanced',
        img:advImg,
        name:'Advanced',
        perMonth:12,
        perYear:120,
        discount:'2 months free'
    },
    {
        id:'2',
        package:'pro',
        img:proImg,
        name:'Pro',
        perMonth:15,
        perYear:150,
        discount:'2 months free'
    }
]
export default Packages