function simpan() {

  let data = {

    toko: document.getElementById("toko").value,

    ambil: document.getElementById("ambil").value,

    setoran: document.getElementById("setoran").value

  };


  if(data.ambil == "" && data.setoran == ""){

    alert("Isi ambil barang atau setoran");

    return;

  }


  fetch(API_URL, {

    method: "POST",

    body: JSON.stringify(data)

  })

  .then(response => response.text())

  .then(hasil => {


    document.getElementById("hasil").innerHTML = hasil;


    document.getElementById("ambil").value = "";

    document.getElementById("setoran").value = "";


  })

  .catch(error => {

    alert("Gagal mengirim data");

    console.log(error);

  });


}
