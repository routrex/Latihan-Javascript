
// DATA MAHASISWA DENGAN NAMA DAN NILAI
var mahasiswa = [    
        { nama : 'Rifaldi',nilai : 70 },
        { nama : 'Jarwo',nilai : 50 },
        { nama : 'Andi',nilai : 75 },
        { nama : 'Rian',nilai : 65 },
        { nama : 'Angie',nilai : 95 },
        { nama : 'Ririn',nilai : 85 },
]

// MENGHITUNG RATA RATA NILAI MAHASISWA
function hitungRatarata(mahasiswa) {    
    var totalNilai = 0;
    for(var i = 0; i < mahasiswa.length; i++){
        totalNilai += mahasiswa[i].nilai;
    }

    return totalNilai/mahasiswa.length;
}

// FUNGSI MENAMPILKAN MAHASISWA DENGAN NILAI DIATAS RATA RATA
function tampilkanMahasiswaDiatasRatarata(mahasiswa,rataRata) {
    console.log('Mahasiswa diatas rata-rata');
    for (var i = 0; i < mahasiswa.length; i++){
        if(mahasiswa[i].nilai > rataRata){
            console.log(mahasiswa[i].nama +' ' +'dengan nilai' +' ' +mahasiswa[i].nilai)
        }
    }
}

// MEMANGGIL FUNGSI UNTUK MENGHITUNG RATA RATA NILAI
var rataRata = hitungRatarata(mahasiswa);
console.log('Rata rata nilai :' +' ' +rataRata)

// MENAMPILKAN MAHASISWA DENGAN NILAI DIATAS RATA RATA
tampilkanMahasiswaDiatasRatarata(mahasiswa,rataRata);
