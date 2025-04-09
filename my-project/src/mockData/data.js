import { delay } from "motion"
import { del, img, text } from "motion/react-client"

export const NavbarMenu = [
    {
        id:1,
        title: "HOME",
        link: "/"
    },
    {
        id:2,
        title:"ABOUT",
        link:"about"
    },
    {
        id:3,
        title:"SERVICES",
        link:"services"
    },
    {
        id:4,
        title:"WHY US",
        link:"choose"
    },
    {
        id:5,
        title: "LEADERS",
        link: "leader"
    }
]


export const PioneerData = [
    {
        id:1,
        name: "Dr. Bikas Maity",
        text: "Chief Executive Officer ",
        img: "../../images/ceopic.jpg",
        delay: 0.2,
    },
    {
        id:2,
        name: "Hemanta Bhaumik",
        text: "Executive",
        img: "../../images/exepic.jpg",
        delay: 0.5,
    },
    {
        id:3,
        name: "Dr. Nirmal Das",
        text: "Head, IT Division",
        img: "../../images/headpic.jpg",
        delay: 0.8
    },
    {
        id:4,
        name: "Mr.B.K.Bera",
        text: "../../images/capic.jpg",
        delay: 1.1
    }
]