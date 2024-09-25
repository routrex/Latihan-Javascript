// PROGRAM 1

// fungsi untuk menampilkan data mahasiswa
function dataMahasiswa(nama,nim,semester,jurusan) {
    console.log('Nama :' +' '+nama);
    console.log('Nim :' +' '+nim)
    console.log('Semester :' +' '+semester)
    console.log('Jurusan :' +' '+jurusan)
}
// fungsi untuk mengembalikan nilai sebagai argument pada dataMahasiswa
function outputData() {
    var nama = 'Cahyo nugroho',
        nim = 2255201066,
        semester = 5,
        jurusan = 'Teknik informatika';

        // mengembalikan nilai variabel

        // return {
        //     nama,nim,semester,jurusan
        // };

        // PENGGUNAAN THIS
        this.nama = nama;
        this.nim = nim;
        this.semester = semester;
        this.jurusan = jurusan;
}

// tampilkan pada console.log

// var cetak = outputData();
var cetak = new outputData();
dataMahasiswa(cetak.nama, cetak.nim, cetak.semester, cetak.jurusan);




// PROGRAM 2

function tampilkanDataMahasiswa(nama,nim,jurusan,semester) {
    console.log('nama :' +' ' +nama)
    console.log('nim :' +' ' +nim)
    console.log('jurusan :' +' ' +jurusan)
    console.log('semester :' +' ' +semester)
}
// TEKNIK MENGGUNAKAN OBJECT LITERALL
function outputDataMahasiswa() {
    var namaMahasiswa = {
        nama : 'Andi frimawan', 
        nim : 202020333,
        jurusan : 'Teknik Informatika',
        semester : 5,
    }

    return namaMahasiswa ;
}

var cetak = outputDataMahasiswa();
tampilkanDataMahasiswa(cetak.nama,cetak.nim,cetak.jurusan,cetak.semester);





// PROGRAM 3

// TEKNIK PENGGUNAAN THIS PADA OBJECT DENGAN MENGGUNAKAN PERULANGAN
function isiData() {
        this.nama = prompt('Masukan nama');
        this.nim = prompt('Masukan nim');
        this.jurusan = prompt('Nama jurusan');
        this.semester = prompt('semester');    
}

function tampilkan(nama,nim,jurusan,semester) {
    console.log('nama :' +nama)
    console.log('nim :' +nim)
    console.log('jurusan :' +jurusan)
    console.log('semester :' +semester)
}

var ulang = true;
// LOOPING
while(ulang){
    var cetak = new isiData();
    tampilkan(cetak.nama,cetak.nim,cetak.jurusan,cetak.semester);

    ulang = confirm('ingin coba lagi ?');
}
