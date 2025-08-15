use sekolah;

-- membuat view dari table siswa
create view vw_siswa as
select * from siswa;

-- mmebuat view dari table agama
create view vw_agama as
select * from agama;

-- menggabungkan menjadi 1 view untuk menampilkan jumlah agama siswa
create view vw_jml_agama_siswa as select vw_agama.nama as Nama,
count(vw_agama.nama) as Jumlah
from vw_siswa, vw_agama
where vw_agama.kode = vw_siswa.kode_agama
group by vw_agama.kode;