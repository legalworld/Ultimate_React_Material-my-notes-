import styles from "./Greeting.module.css";
import styles2 from "./Greeting2.module.css";

// this styles is now a object. and all the classes going to become properties of it...
// the main benefit of css modules is it prevents name collision...
// u can use same class name in different css files, that's the biggest and only advantage of using css modules.
function Greeting() {
  return (
    <div className={`${styles.container} ${styles["bg-dark"]}`}>
      <h1>Hello, Gourab</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        natus culpa, dolorum at hic, alias necessitatibus, iure voluptates
        distinctio a recusandae delectus ab reprehenderit nisi soluta error vel
        ipsum tenetur nemo ipsam omnis consequuntur sit veritatis! Nesciunt
        rerum explicabo, pariatur velit mollitia error unde dolore ea earum ad
        corporis officia.
      </p>
    </div>
  );
}

export default Greeting;

/*

import "./Greeting.css";
import "./Greeting2.css";

the second import will override the first import's effects.
 but there is a way to get rid of this thing, which is --->
 CSS Modules.

 as you can see before these import statements are overriding eachother.
 but after we used css modules, we are able to differentiate both beside of them having same class name... 

*/
