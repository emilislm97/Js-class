class Muessise {

  Isciler = [
    [ ],
    [ ],
    [ ]
  ]
  constructor(ad, fillial) {
    this.SirketAdi = ad;
    this.Fillial = fillial;
  }

  Gonder() {
    let data = this.Isciler
    let ad = document.getElementById("i1").value;
    let vezife = document.getElementById("i2").value;
    let maas = document.getElementById("i3").value;

    data[0].push(ad);
    data[1].push(vezife);
    data[2].push(maas);
  }

  IscilerSiyahi() {
    let tbl = `
        <table class="table">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ad</th>
            <th scope="col">Vezife</th>
            <th scope="col">Maas</th>
          </tr>
        `;

    let data = this.Isciler;
    for (let i = 0; i < data[0].length; i++) {
      tbl += `
            <tr>
            <th scope="Row">${i+1}</th>
            <th >${data[0][i]}</th>
            <th >${data[1][i]}</th>
            <th >${data[2][i]} AZN</th>
          </tr>
          `;
    }
    tbl += "</table>";
    return tbl;
  }
}

let A = new Muessise("A şirkəti", "Elmlər");
document.getElementsByTagName("h1")[0].innerHTML =A.SirketAdi;
document.getElementsByTagName("h3")[0].innerHTML =A.Fillial;
document.getElementsByTagName("main")[0].innerHTML = A.IscilerSiyahi();

function Send() {
  document.getElementsByTagName("main")[0].innerHTML = A.Gonder();
  document.getElementsByTagName("main")[0].innerHTML = A.IscilerSiyahi();
  for(i=0; i<=2;i++){
    document.getElementsByTagName("input")[i].value="";
  }
}