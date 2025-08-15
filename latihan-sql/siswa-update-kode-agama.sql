use sekolah;

update siswa
set kode_agama = '1'
-- regexp : mencocokkan pola teks menggunakan reguler expression
where nama regexp '^[NS]';

update siswa
set kode_agama = '4'
where nama regexp '^D';