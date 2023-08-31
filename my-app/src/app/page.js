import styles from "./page.module.css";
import Component from "./component/page";

export default function Home() {
  return (
    <div>
      <div>
        <div className={styles.all}>
          <div id={"ide"}>
            <div className={styles.alp}>
              <div className={styles.header}>
                <h2>team.</h2>
                <div className={styles.buttons}>
                  <button className={styles.generic}>Products</button>
                  <button className={styles.generic}>Services</button>
                  <button className={styles.generic}>Contact</button>
                  <button className={styles.generic}>Log in</button>
                  <button className={styles.general}>Get Access</button>
                </div>
              </div>
              <div className={styles.mpaa}>
                <h1>Blog posts</h1>
                <p className={styles.op}>
                  Our latest updates and blogs about managing your team
                </p>
              </div>
            </div>
          </div>
          <div className={styles.contain}>
            <div className={styles.cards}>
              <Component />
            </div>
            <div className={styles.but}>
              <button className={styles.ph}>Next</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.black}>
        <div className={styles.amndakh}>
          <h2 className={styles.whit}>team.</h2>
          <h5 className={styles.whitee}>Use Cases</h5>
          <h5 className={styles.whiteeeee}>Explore</h5>
          <h5 className={styles.whiteee}>Resources</h5>
          <h5 className={styles.whiteeee}>Subscribe to our newsletter</h5>
        </div>
        <div className={styles.fringe}>
          <div className={styles.firstcol}>
            <div className={styles.socone}>
              <img
                width="16px"
                height="16px"
                src="https://cdn-icons-png.flaticon.com/128/1419/1419647.png"
              />
              <h5 className={styles.social}>instagram</h5>
            </div>
            <div className={styles.socone}>
              <img
                width="21px"
                height="16px"
                src="https://iconape.com/wp-content/png_logo_vector/facebook-f.png"
              />
              <h5 className={styles.social}>Facebook</h5>
            </div>
            <div className={styles.socone}>
              <img
                width="16px"
                height="12px"
                src="https://www.shareicon.net/data/128x128/2016/11/14/852005_square_512x512.png"
              />
              <h5 className={styles.social}>Twitter</h5>
            </div>
            <div className={styles.socone}>
              <img
                width="16px"
                height="16px"
                src="https://cdn-icons-png.flaticon.com/128/1419/1419647.png"
              />
              <h5 className={styles.social}>instagram</h5>
            </div>
            <div className={styles.socone}>
              <img
                width="21px"
                height="16px"
                src="https://iconape.com/wp-content/png_logo_vector/facebook-f.png"
              />
              <h5 className={styles.social}>Facebook</h5>
            </div>
            <div className={styles.socone}>
              <img
                width="16px"
                height="12px"
                src="https://www.shareicon.net/data/128x128/2016/11/14/852005_square_512x512.png"
              />
              <h5 className={styles.social}>Twitter</h5>
            </div>
          </div>
          <div className={styles.secondcol}>
            <h5 className={styles.social}>UI Design</h5>
            <h5 className={styles.social}>UX Design</h5>
            <h5 className={styles.social}>Prototyping</h5>
            <h5 className={styles.social}>UI Design</h5>
            <h5 className={styles.social}>UX Design</h5>
            <h5 className={styles.social}>Prototyping</h5>
          </div>
          <div className={styles.thirdcol}>
            <h5 className={styles.social}>Figma</h5>
            <h5 className={styles.social}>Customers</h5>
            <h5 className={styles.social}>Why I Love Figma</h5>
            <h5 className={styles.social}>Figma</h5>
            <h5 className={styles.social}>Customers</h5>
            <h5 className={styles.social}>Why I Love Figma</h5>
          </div>
          <div className={styles.fourthcol}>
            <h5 className={styles.social}>Community Resources Hub</h5>
            <h5 className={styles.social}>Support</h5>
            <h5 className={styles.social}>Education</h5>
            <h5 className={styles.social}>Sigma</h5>
            <h5 className={styles.social}>Support</h5>
            <h5 className={styles.social}>AIDS</h5>
          </div>
          <div className={styles.fourthcol}>
            <button className={styles.socialb}>Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}
