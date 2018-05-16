const title ='sekizenkan';
const img = "https://www.yadoran.jp/img/photo/m/a1/20/48/a120484ce9c7bdf7d44707ca2bc75ab6.jpg";

const msg = 
  <div>
    <h1>{title}</h1>
    <p><img src = {img}/></p>
  </div>
ReactDOM.render(msg, document.getElementById("root"));