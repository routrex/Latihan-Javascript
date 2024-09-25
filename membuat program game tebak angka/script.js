alert('Ayo bermain tebak angka dari 1-10 !!! \nAnda mempunyai 3 kesempatan');

var hasil = true;

while(hasil){
        var compt = Math.floor(Math.random() *10);
        var player = prompt('Masukan angka');
        var kesempatan = 2;

        for(kesempatan ; kesempatan >= 0; kesempatan--){
        
            if(player==compt){
                alert('Anda BENAR!!!' +' ' +'\nAngka yang dicari adalah' +' ' +compt);
                break;
            }else if (player < compt && kesempatan > 0){
                alert('Angka yang anda masukan terlalu RENDAH!' +' ' +'\nAyo masi ada' +' ' +kesempatan +' ' +'kesempatan');

                var player = prompt('Masukan angka');
            }else if(player > compt && kesempatan > 0){
                alert('angka yang anda masukan terlalu BESAR!' +' '  +'\nAyo masi ada' +' ' +kesempatan +' ' +'kesempatan');
                
                var player = prompt('Masukan angka');
            }else if(kesempatan==0){
                alert('Anda GAGAL!!! \nAngka yang dicari adalah' +' ' +compt);
            }else{
                alert('Anda tidak memasukan angka!');
                break;
            }
        }

    hasil = confirm('ingin bermain lagi ?');
}

    alert('terimakasih telah bermain');


