import { Card, CardBody, CardFooter } from "@nextui-org/react";
import web1 from "../images/web1.png";
import web2 from "../images/web2.png";
import web3 from "../images/web3.png";
import web4 from "../images/web4.png";
import web5 from "../images/web5.png";
import web6 from "../images/web6.png";
import web7 from "../images/web7.png";
import web8 from "../images/web8.png";
import web9 from "../images/web9.png";
import web10 from "../images/web10.png";
import web11 from "../images/web11.png";
import web12 from "../images/web12.png";
import web13 from "../images/web13.png";
import web14 from "../images/web14.png";
import Image from "next/image";

export default function DisplayBox() {
  const list = [
    {
      title: "element-hyper",
      img: web1, // Path relative to public folder
      price: "John Smith",
      date: "38 mins ago",
    },
    {
      title: "business-gator",
      img: web2,
      price: "Emily Davis",
      date: "2 days ago",
    },
    {
      title: "kiwi-bigfan",
      img: web3,
      price: "Michael Johnson",
      date: "4 days ago",
    },
    {
      title: "jake chen",
      img: web4,
      price: "Sarah Lee",
      date: "4 days ago",
    },
    {
      title: "Avocado-kill",
      img: web5,
      price: "Daniel Brown",
      date: "6 days ago",
    },
    {
      title: "Lemon-bang",
      img: web6,
      price: "Olivia Martinez",
      date: "6 days ago",
    },
    {
      title: "road murder",
      img: web7,
      price: "James Wilson",
      date: "7 days ago",
    },
    {
      title: "Watermelon",
      img: web8,
      price: "Sophia Taylor",
      date: "8 days ago",
    },
    {
      title: "durian-superStar",
      img: web9,
      price: "David Thomas",
      date: "19 days ago",
    },
    {
      title: "JumpJump Tiger",
      img: web10,
      price: "Isabella Hernandez",
      date: "20 days ago",
    },
    {
      title: "Tiger kingdom",
      img: web11,
      price: "William Garcia",
      date: "21 days ago",
    },
    {
      title: "Beijing mayor",
      img: web12,
      price: "Mia Robinson",
      date: "28 days ago",
    },
    {
      title: "road murder",
      img: web13,
      price: "Henry Clark",
      date: "30 days ago",
    },
    {
      title: "Watermelon",
      img: web14,
      price: "Charlotte Lewis",
      date: "34 days ago",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mb-3">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          className="bg-black bg-opacity-100"
        >
          <CardBody className="overflow-visible p-0">
            {/* <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            /> */}
            <div className="rounded-lg overflow-hidden h-[160px] m-2">
              {" "}
              {/* 包裹一层div来实现圆角 */}
              <Image
                src={item.img}
                width={500}
                height={300} // 添加高度
                alt={item.title}
                className="object-cover" // 移除固定高度，使用高度属性
              />
            </div>
          </CardBody>
          <CardFooter className="text-small justify-between text-white p-1 ">
            {item.title}
          </CardFooter>
          <CardFooter className="text-small justify-left text-white p-1 text-xs">
            {item.date}
            <p className="text-default-500 text-white">by @{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
