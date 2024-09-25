// PROGRAM 1

// // membuat fungsi menampilkan hasil input
function tampilkanDatamahasiswa(nama, nim, jurusan, universitas) {
  console.log("Nama :" + " " + nama);
  console.log("Nim :" + " " + nim);
  console.log("Jurusan :" + " " + jurusan);
  console.log("Universitas :" + " " + universitas);
}

// membuat fungsi input menggunakan prompt dan mengembalikan nilai parameter sebagai argument untuk datamahasiswa
function inputDatamahasiswa() {
  var nama = prompt("Masukan nama"),
    nim = prompt("Masukan nim"),
    jurusan = prompt("Masukan jurusan"),
    universitas = prompt("Masukan nama universitas");

  // mengembalikan nilai pada variabel
  return {
    nama,
    nim,
    jurusan,
    universitas,
  };
}

// menampilkan program
var cetak = inputDatamahasiswa();
tampilkanDatamahasiswa(cetak.nama, cetak.nim, cetak.jurusan, cetak.universitas);

// PROGRAM 2

// Penggunaan Arrow function pada function Expression
let inputDatamahasiswa = () => {
  let nama = prompt("Masukan nama");
  let nim = prompt("Masukan nim");
  let jurusan = prompt("Masukan nama Jurusan");
  let semester = prompt("Masukan semester");

  return { nama, nim, jurusan, semester };
};

let tampilkanDatamahasiswa = (nama, nim, jurusan, semester) => {
  console.log("Nama :" + " " + nama);
  console.log("Nim :" + " " + nim);
  console.log("Jurusan :" + " " + jurusan);
  console.log("Semester :" + " " + semester);
};

let cetak = inputDatamahasiswa();
tampilkanDatamahasiswa(cetak.nama, cetak.nim, cetak.jurusan, cetak.semester);
