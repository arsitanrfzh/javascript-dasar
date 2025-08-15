use sekolah;

create view vw_agama_siswa as
select siswa.nis as NIS,
siswa.nama as Nama_Siswa,
agama.nama as Agama_Siswa
from siswa, agama
where siswa.kode_agama = agama.kode;