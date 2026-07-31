import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Greeting firstName="Gourab" lastName="Dutta">
        <h2>hi there, Greetings</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, dicta!
        </p>
      </Greeting>
    </div>
  );
}

export default App;

/*

in react, when you write something between opening & closing component tag,
that thing becomes a value of children prop.(you can see this in browser's components tab)
and this children is decided and reserved by react itself...

e.g.-->

{
  "children": "<h2 />"

    props: {children: "hi there, Greetings"}
       children: "hi there, Greetings"
       
}

and how we can then access the code, i have showed it in the codes.

joto kichu amra ei opening & closing component tag greeting er vitor likhbo, sob tai children prop er vitor jabe... 

*/
