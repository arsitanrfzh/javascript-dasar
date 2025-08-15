use sekolah;

select siswa.nis, siswa.nama, agama.nama
from siswa
join agama on siswa.kode_agama = agama.kode
where agama.nama in ('Islam', 'Protestan');