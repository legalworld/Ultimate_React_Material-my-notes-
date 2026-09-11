import { Form } from "react-router-dom";
function SearchForm({ searchTerm }) {
  return (
    <Form>
      <input
        type="text"
        name="search"
        id="search"
        defaultValue={searchTerm}
        required
      />
      <button type="submit">Search</button>
    </Form>
  );
}

export default SearchForm;

/*
here i'm gonna use Form component of react-router-dom.
with the help of this form i can get the data and submit the data as well...

we gonna make this form in the same way as we make normal forms...
but things will change in the background a little bit...

! name attribute is important with input tag...

the Form component here, does get req by defult...
when you type something in the input tab and click submit.
then you can see comething like this in the url tab
---> http://localhost:5173/?search=hello 

now i want to get the value of my search parameter logically in code...
how to do that ?
==>
now the data is being loading, and it's been loading from Home page...
so i'm gonna make a loader function in the Home page..
and it's also important you return something from loader function...

and i'm importing the loader in the App.jsx file... all this loader stuff is a design
pattern...

when the req goes the loader function will work.and when it works 
the args should get print...

* you will see url in the req key. from this url you can get
* what are the things you can get...

i just want the value of search --> 

*/

// i coded (Create form and get the search param) lecture in this folder...
