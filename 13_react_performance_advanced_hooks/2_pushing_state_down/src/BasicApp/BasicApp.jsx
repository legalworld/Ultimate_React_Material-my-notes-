import InputForm from "./InputForm";
import ExtraComponent from "./ExtraComponent";

function BasicApp() {
  console.log("BasicApp rendered");

  return (
    <div>
      <h1>Basic App</h1>
      <InputForm />
      <ExtraComponent />
    </div>
  );
}

export default BasicApp;
