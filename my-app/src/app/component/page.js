const comp = [
  {
    title: "               The Emotional Toll of Being in UX",
    desc: `                You might not know the music, but designers
    have certainly taken notice of this small but
    visceral movement from the late ’80s`,
    img: "https://www.nordicinnovation.org/sites/default/files/styles/featured/public/2022-02/Business%20meeting%20-%20Credit%20Jason%20Goodman%20Unsplash.jpg?h=92e73bb3&itok=1-6t8hbX",
    ava: "https://i0.wp.com/www.eatwellhealthcentre.ca/wp-content/uploads/2020/04/woman-wearing-red-sweater.jpg?w=472&ssl=1",
    name: "Wade Warren",
  },
  {
    title: "                10 secret tips for managing a team remotely",
    desc: `                Our latest updates and blogs about managing your team
    Our latest updates and blogs about managing your team`,
    img: "https://static.wixstatic.com/media/3bd387_2413086cb6864d81bcdfe0280626c036~mv2.jpg/v1/fill/w_624,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3bd387_2413086cb6864d81bcdfe0280626c036~mv2.jpg",
    ava: "http://www.medicalaestheticsct.com/uploads/5/3/1/4/53149343/published/jake-nackos-if9tk5uy-ki-unsplash.jpg?1607014619",
    name: "Bessie Cooper",
  },
  {
    title: "               What Ever Happened to Steampunk?",
    desc: `                How the iPhone popularized steampunk… and how the iPhone killed it off`,
    img: "https://ecommerce-search-engines.com/wp-content/uploads/2021/09/9.jpeg",
    ava: "http://www.medicalaestheticsct.com/uploads/5/3/1/4/53149343/published/jake-nackos-if9tk5uy-ki-unsplash.jpg?1607014619",
    name: "Courtney Henry",
  },
  {
    title: "               The 2020 Guide for White Men in Tech",
    desc: `                How to use centuries of unfair advantage to make the world a more equal place`,
    img: "https://www.cfar.com/wp-content/uploads/Natural_Entry_Points.jpg",
    ava: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    name: "Darlene Robert",
  },
  {
    title: "               Why Are Women Still Behind in the Design World?",
    desc: `                It’s 2020, but women designers still face lower pay and less opportunity. What gives?`,
    img: "https://worldbank.scene7.com/is/image/worldbankprod/Young-Professionals-on-e-Commerce-Project?wid=780&hei=439&qlt=85,0&resMode=sharp",
    ava: "https://images.unsplash.com/photo-1633367583895-08545d733dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    name: "Leslie Alexander",
  },
  {
    title: "                The Ultimate Guide to Becoming a Great Designer",
    desc: `               Our latest updates and blogs about managing your team
    Our latest updates and blogs about managing your team`,
    img: "https://managementtrust.com/wp-content/uploads/2022/03/iStock-1359112316-1210x423.jpg",
    ava: "https://www.strose.edu/wp-content/uploads/2023/07/pexels-andrea-piacquadio-3769021-955x538.jpg",
    name: "Eleanor Pena",
  },
  {
    title: "                Data-Driven Design is Killing Our Instincts",
    desc: `                Our latest updates and blogs about managing your team
    Our latest updates and blogs about managing your team`,
    img: "https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/A-Man-Talks-To-A-Couple-From-Across-The-Table-With-Laptop-In-Front-Of-Him.jpg",
    ava: "https://tnpa.org/wp-content/uploads/stephanie-liverani-Zz5LQe-VSMY-unsplash-768x621.jpg",
    name: "Jane Cooper",
  },
  {
    title: "                Finding the Blank Spots in Big Data",
    desc: `                Artists and designers are working to address a major problem for marginalized communities in the data economy: ‘If the data does not exist…
    `,
    img: "https://www.norfund.no/app/uploads/sites/4/2022/04/Norfund_HMLS3274-2048x1365.jpg",
    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ94nWgb1LzNDvjlbdHpJJUFCCkZH0PXSXE_DPtzxR3Kglk16t",
    name: "Jenny Wilson",
  },
  {
    title: "                3 Lessons We Learned From Rebranding Gusto",
    desc: `                You might not know the music, but designers
    have certainly taken notice of this small but
    visceral movement from the late ’80s`,
    img: "https://bairesdev.mo.cloudinary.net/blog/2023/04/How-to-Structure-and-Lead-the-Most-Effective-Product-Development-Team.jpg?tx=w_1920,q_auto",
    ava: "https://tnpa.org/wp-content/uploads/stephanie-liverani-Zz5LQe-VSMY-unsplash-768x621.jpg",
    name: "Jacob Jones",
  },
];

import styles from "../page.module.css";

const arr = [];
let i = 0;

export default function Component() {
  for (let i = 0; i < comp.length; i++) {
    arr.push(
      <div>
        {
          <div>
            <div className={styles.firstGrid}>
              <div className={styles.firstImg}>
                <img
                  className={styles.thingImg}
                  width="370px"
                  height="177px"
                  src={comp[i].img}
                />
              </div>
              <div className={styles.firstText}>
                <h3 className={styles.family}>{comp[i].title}</h3>
                <p className={styles.familee}>{comp[i].desc}</p>
              </div>
            </div>
            <div className={styles.firstAvatar}>
              <img className={styles.icon} src={comp[i].ava}></img>
              <p>{comp[i].name}</p>
              <p>2nd January,2022</p>
            </div>
          </div>
        }
      </div>
    );
  }
  return <div className={styles.dementia}>{arr}</div>;
}
